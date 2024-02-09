import { Image, Modal, StyleSheet, View } from "react-native";
// constant colors
import Colors from "../config/Colors";
// components
import BgDesign from "../components/BgDesign";
import DownBgDesign from "../components/DownBgDesign";

export default function WelcomeScreen({ visible, mode }) {
  return (
    <Modal visible={visible} animationType="slide">
      {/* bg design */}
      <BgDesign size={200} modes={mode} />
      <DownBgDesign size={200} modes={mode} />

      <View style={[styles.container, mode && styles.modeBg]}>
        <Image style={styles.img} source={require("../assets/goal3.png")} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white000,
    position: "relative",
    zIndex: -5,
  },
  img: {
    width: 300,
    height: 250,
  },
  modeBg: {
    backgroundColor: Colors.black200,
  },
});
