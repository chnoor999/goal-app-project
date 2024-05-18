import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { DrawerItemList } from "@react-navigation/drawer";

import Logo from "./Logo";
import ToggleModeMenu from "../navigation/ToggleModeMenu";
import Constants from "expo-constants";

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <Logo height={100} width={100} style={styles.img} />
      <DrawerItemList {...props} />
      <ToggleModeMenu />
    </View>
  );
};

export default memo(DrawerContent);

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  img: {
    paddingVertical: 50,
  },
});
