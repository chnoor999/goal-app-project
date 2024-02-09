import { StyleSheet, Text, View } from "react-native";
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
import Colors from "../config/Colors";
// reac native paper
import { RadioButton } from "react-native-paper";

export default function ModeMenu({ modes, radioChecked, toggleRadio }) {
  return (
    <Menu style={styles.container} >
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
          color={modes ? "#e9ecef" : Colors.black300}
        />
      </MenuTrigger>
      <MenuOptions style={modes && styles.modeBg}>
        {/* light button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("light")}>
          <View style={styles.optionContainer}>
            <Text style={modes && styles.modeText}>Light</Text>
            <RadioButton
              onPress={() => toggleRadio("light")}
              status={radioChecked == "light" ? "checked" : "unchecked"}
            />
          </View>
        </MenuOption>
        {/* dark button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("dark")}>
          <View style={styles.optionContainer}>
            <Text style={modes && styles.modeText}>Dark</Text>
            <RadioButton
              onPress={() => toggleRadio("dark")}
              status={radioChecked == "dark" ? "checked" : "unchecked"}
            />
          </View>
        </MenuOption>
        {/* system button ................................................................. */}
        <MenuOption onSelect={() => toggleRadio("system")}>
          <View style={styles.optionContainer}>
            <Text style={modes && styles.modeText}>Auto</Text>
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
