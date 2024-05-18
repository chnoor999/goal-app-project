import { StyleSheet, View, useColorScheme } from "react-native";
import { memo, useCallback, useEffect } from "react";
import { ModeActions } from "../../store/features/modeSlice";
import { useDispatch, useSelector } from "react-redux";

import MyText from "../ui/MyText";
import Colors from "../../config/color/Colors";
import ModeMenu from "./ModeMenu";
import ModeIcons from "./ModeIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ToggleModeMenu = () => {
  const { mode } = useSelector((state) => state.mode);
  const modeType = useSelector((state) => state.mode.type);
  const dispatch = useDispatch();

  const systemMode = useColorScheme();

  const toggleRadio = useCallback((txt) => {
    dispatch(ModeActions.setModeType({ text: txt }));
  }, []);

  useEffect(() => {
    if (!modeType) return;

    switch (modeType) {
      case "light":
        dispatch(ModeActions.enableLightMode());
        break;
      case "dark":
        dispatch(ModeActions.enableDarkMode());
        break;
      case "system":
        if (systemMode === "light") {
          dispatch(ModeActions.enableLightMode());
        } else if (systemMode === "dark") {
          dispatch(ModeActions.enableDarkMode());
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
        <ModeIcons />
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
        <ModeMenu toggleRadio={toggleRadio} />
      </View>
    </View>
  );
};

export default memo(ToggleModeMenu);

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 19,
    paddingVertical: 8,
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
