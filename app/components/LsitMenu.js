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
// constant colors
import Colors from "../config/Colors";

export default function LsitMenu({
  onEdit,
  onDelete,
  onFav,
  FavCondition,
  modes,
  shareGoal,
}) {
  return (
    <Menu style={styles.container}>
      <MenuTrigger
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingHorizontal: 5,
        }}
      >
        <Entypo
          name="dots-three-vertical"
          size={18}
          color={modes ? Colors.white000 : Colors.black000}
        />
      </MenuTrigger>
      <MenuOptions style={modes && styles.modeBg}>
        {/* share button ................................................................. */}
        <MenuOption onSelect={shareGoal}>
          <View>
            <Text style={modes && styles.modeText}>Share</Text>
          </View>
        </MenuOption>
        {/* edit button ................................................................. */}
        <MenuOption onSelect={() => onEdit()}>
          <View>
            <Text style={modes && styles.modeText}>Edit</Text>
          </View>
        </MenuOption>
        {/* favourites button ................................................................. */}
        <MenuOption onSelect={() => onFav()}>
          <View>
            <Text style={modes && styles.modeText}>
              {FavCondition ? "Remove to Favourites " : "Add to Favourites"}
            </Text>
          </View>
        </MenuOption>
        {/* delete button ................................................................. */}
        <MenuOption onSelect={() => onDelete()}>
          <View>
            <Text style={{ color: "tomato", fontWeight: "500" }}>Delete</Text>
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
    height: "100%",
    maxHeight: 40,
    borderLeftWidth: 1,
    borderColor: Colors.grey000,
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black300,
  },
});
