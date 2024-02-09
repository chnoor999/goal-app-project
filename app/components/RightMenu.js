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
// constant color
import Colors from "../config/Colors";
import { useNavigation } from "@react-navigation/native";

export default function RightMenu({ mode }) {
  const navigation =useNavigation()

  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.container}>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={mode ? Colors.white000 : Colors.black000}
          />
        </View>
      </MenuTrigger>
      <MenuOptions style={[mode && styles.modeBg]}>
        <MenuOption onSelect={()=>{navigation.openDrawer()}}>
          <View>
            <Text style={mode && styles.modeText}>
              Theme
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
    backgroundColor: Colors.black300,
  },
  modeText: {
    color: Colors.white000,
  },
});
