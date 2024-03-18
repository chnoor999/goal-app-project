import { StyleSheet, View } from "react-native";
// icons
import { AntDesign } from "@expo/vector-icons";
// menu
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
// constant colors
import Colors from "../../config/color/Colors";
// reac native paper
import { RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";
import MyText from "../ui/MyText";

export default function ModeMenu({ radioChecked, toggleRadio }) {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <Menu style={styles.container}>
      <MenuTrigger
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 30,
          borderRadius: 50,
          overflow: "hidden",
        }}
      >
        <AntDesign
          name="down"
          size={18}
          color={mode ? "#e9ecef" : Colors.black300}
        />
      </MenuTrigger>
      <MenuOptions style={mode && styles.modeBg}>
        {/* light button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("light")}>
          <View style={styles.optionContainer}>
            <MyText style={mode && styles.modeText}>Light</MyText>
            <RadioButton
              onPress={() => toggleRadio("light")}
              status={radioChecked == "light" ? "checked" : "unchecked"}
            />
          </View>
        </MenuOption>
        {/* dark button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("dark")}>
          <View style={styles.optionContainer}>
            <MyText style={mode && styles.modeText}>Dark</MyText>
            <RadioButton
              onPress={() => toggleRadio("dark")}
              status={radioChecked == "dark" ? "checked" : "unchecked"}
            />
          </View>
        </MenuOption>
        {/* system button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("system")}>
          <View style={styles.optionContainer}>
            <MyText style={mode && styles.modeText}>Auto</MyText>
            <RadioButton
              onPress={() => toggleRadio("system")}
              status={radioChecked == "system" ? "checked" : "unchecked"}
            />
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    marginRight: 16,
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black300,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
