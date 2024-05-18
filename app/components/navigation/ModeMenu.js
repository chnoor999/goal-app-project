import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { memo } from "react";
import { useSelector } from "react-redux";

import Colors from "../../config/color/Colors";
import MyRadioButton from "../ui/MyRadioButton";

const ModeMenu = ({ toggleRadio }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <Menu>
      <MenuTrigger style={styles.TriggerContainer}>
        <AntDesign
          name="down"
          size={18}
          color={mode ? "#e9ecef" : Colors.black300}
        />
      </MenuTrigger>
      <MenuOptions style={mode && styles.modeBg}>
        {/* light button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("light")}>
          <MyRadioButton
            onPress={() => toggleRadio("light")}
            text={"Light"}
            type={"light"}
          />
        </MenuOption>
        {/* dark button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("dark")}>
          <MyRadioButton
            onPress={() => toggleRadio("dark")}
            text={"Dark"}
            type={"dark"}
          />
        </MenuOption>
        {/* system button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("system")}>
          <MyRadioButton
            onPress={() => toggleRadio("system")}
            text={"Auto"}
            type={"system"}
          />
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default memo(ModeMenu);

const styles = StyleSheet.create({
  TriggerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    marginRight: 19,
    borderRadius: 500,
    overflow: "hidden",
  },
  modeBg: {
    backgroundColor: Colors.black300,
  },
});
