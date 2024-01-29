import { StyleSheet, Text, View } from "react-native";
// icons
import { Entypo } from "@expo/vector-icons";
// menu liberary
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

export default function RightMenu({ onMode, modeTextCondition, mode }) {
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.container}>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={mode ? "#fff" : "#000"}
          />
        </View>
      </MenuTrigger>
      <MenuOptions style={[mode && styles.modeBg]}>
        <MenuOption onSelect={onMode}>
          <View>
            <Text style={mode && styles.modeText}>
              {modeTextCondition ? "Enable light mode" : "Enable dark mode"}
            </Text>
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  modeBg: {
    backgroundColor: "#333",
  },
  modeText: {
    color: "#fff",
  },
});
