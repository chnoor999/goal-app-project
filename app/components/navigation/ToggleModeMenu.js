import { StyleSheet,  View, useColorScheme } from "react-native";
import { useEffect } from "react";
import { ModeActions } from "../../store/features/modeSlice";
import { useDispatch, useSelector } from "react-redux";

import MyText from "../ui/MyText";
import Colors from "../../config/color/Colors";
import ModeMenu from "./ModeMenu";
import ModeIcons from "./ModeIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ToggleModeMenu() {
  const { mode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const modeType = useSelector((state) => state.mode.type);

  const toggleRadio = (a) => {
    dispatch(ModeActions.setModeType({text:a}))
  };

  const systemMode = useColorScheme();

  useEffect(() => {
    switch (modeType) {
      case "light":
        dispatch(ModeActions.setLightMode());
        break;
      case "dark":
        dispatch(ModeActions.setDarkMode());
        break;
      case "system":
        if (systemMode === "light") {
          dispatch(ModeActions.setLightMode());
        } else if (systemMode === "dark") {
          dispatch(ModeActions.setDarkMode());
        }
        break;
      default:
        break;
    }

    AsyncStorage.setItem("mode", JSON.stringify(modeType));
  }, [modeType, systemMode]);

  return (
    <View
      style={[
        styles.parentContainer,
        {
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: mode ? "#ffffff10" : "#00000010",
        },
      ]}
    >
      <View style={{ width: 35 }}>
        <ModeIcons radioChecked={modeType} />
      </View>
      <View style={styles.container}>
        <MyText
          style={[
            styles.txt,
            {
              color: mode ? "#e9ecef" : Colors.black300,
              fontFamily: "openSansSemiBold",
            },
          ]}
        >
          Theme
        </MyText>
        <View>
          <ModeMenu radioChecked={modeType} toggleRadio={toggleRadio} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 19,
    paddingVertical: 12,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  txt: {
    fontSize: 15,
    color: Colors.black200,
  },
});
