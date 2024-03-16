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
import Colors from "../../config/color/Colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MyText from "../ui/MyText";

export default function HeaderMenu() {
  const mode = useSelector((state) => state.mode);
  const navigation = useNavigation();

  return (
    <Menu>
      <MenuTrigger style={{ marginRight: 11 }}>
        <View style={styles.container}>
          <Entypo
            name="dots-three-vertical"
            size={20}
            color={mode ? Colors.white000 : Colors.black000}
          />
        </View>
      </MenuTrigger>
      <MenuOptions style={[mode && styles.modeBg]}>
        <MenuOption
          onSelect={() => {
            navigation.openDrawer();
          }}
        >
          <View>
            <MyText style={mode && styles.modeText}>Theme</MyText>
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
  },
  modeBg: {
    backgroundColor: Colors.black300,
  },
  modeText: {
    color: Colors.white000,
  },
});
