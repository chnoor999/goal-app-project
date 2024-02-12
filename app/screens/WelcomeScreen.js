import { Dimensions, Image, Modal, StyleSheet, View } from "react-native";
// constant colors
import Colors from "../config/Colors";
// components
import BgDesign from "../components/BgDesign";
import DownBgDesign from "../components/DownBgDesign";

export default function WelcomeScreen({ visible, mode }) {
  // mobile width
  const windowWidth = Dimensions.get("window").width;

  return (
    <Modal visible={visible} animationType="slide">
      {/* bg design */}
      <BgDesign size={windowWidth < 380 ? 150 : 180} modes={mode} />
      <DownBgDesign size={windowWidth < 380 ? 150 : 180} modes={mode} />

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
    overflow: "hidden",
  },
  img: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  modeBg: {
    backgroundColor: Colors.black200,
  },
});
