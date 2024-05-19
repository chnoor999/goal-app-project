import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../config/color/Colors";
import MyText from "../ui/MyText";

const HeaderMenu = () => {
  const mode = useSelector((state) => state.mode.mode);
  const navigation = useNavigation();

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
        <MenuOption
          onSelect={() => {
            navigation.openDrawer();
          }}
        >
          <View>
            <MyText style={[styles.txt, mode && styles.modeText]}>Theme</MyText>
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default memo(HeaderMenu);

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  modeBg: {
    backgroundColor: Colors.black300,
  },
  modeText: {
    color: Colors.white000,
  },
  txt: {
    fontSize: hp(1.8),
  },
});
