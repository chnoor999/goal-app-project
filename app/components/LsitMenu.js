import { StyleSheet, Text, View } from "react-native";
// icons
import { Entypo } from "@expo/vector-icons";
// menu
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

export default function LsitMenu({
  onEdit,
  onDelete,
  onFav,
  FavCondition,
  modes,
}) {
  return (
    <Menu style={styles.container}>
      <MenuTrigger
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      >
        <Entypo
          name="dots-three-vertical"
          size={18}
          color={modes ? "#fff" : "#000"}
        />
      </MenuTrigger>
      <MenuOptions style={modes && styles.modeBg}>
        <MenuOption onSelect={() => onEdit()}>
          <View>
            <Text style={modes && styles.modeText}>Edit</Text>
          </View>
        </MenuOption>
        <MenuOption onSelect={() => onFav()}>
          <View>
            <Text style={modes && styles.modeText}>
              {FavCondition ? "Remove to Favourites " : "Add to Favourites"}
            </Text>
          </View>
        </MenuOption>
        <MenuOption onSelect={() => onDelete()}>
          <View>
            <Text style={modes && styles.modeText}>Delete</Text>
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
  },
  modeText: {
    color: "#fff",
  },
  modeBg: {
    backgroundColor: "#333",
  },
});
