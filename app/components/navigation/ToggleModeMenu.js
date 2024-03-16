import { StyleSheet, Text, View, useColorScheme } from "react-native";
// constant colors
import Colors from "../../config/color/Colors";
// components
import ModeMenu from "./ModeMenu";
import ModeIcons from "./ModeIcons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MyText from "../ui/MyText";
import { ModeActions } from "../../store/features/modeSlice";

export default function ToggleModeMenu() {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const [radioChecked, setRadioChecked] = useState("system");

  const toggleRadio = (a) => {
    setRadioChecked(a);
  };

  const systemMode = useColorScheme();

  useEffect(() => {
    switch (radioChecked) {
      case "light":
        dispatch(ModeActions.steLightMode());
        break;
      case "dark":
        dispatch(ModeActions.setDarkMode());
        break;
      case "system":
        if (systemMode === "light") {
          dispatch(ModeActions.steLightMode());
        } else if (systemMode === "dark") {
          dispatch(ModeActions.setDarkMode());
        }
        break;
      default:
        break;
    }
  }, [radioChecked, systemMode]);

  return (
    <View
      style={[
        styles.parentContainer,
        {
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: mode ? Colors.black300 : Colors.white300,
        },
      ]}
    >
      <View style={{ width: 32 }}>
        <ModeIcons radioChecked={radioChecked} />
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
          <ModeMenu radioChecked={radioChecked} toggleRadio={toggleRadio} />
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
    fontWeight: "500",
    color: Colors.black200,
  },
});
