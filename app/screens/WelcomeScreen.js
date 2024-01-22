import { Image, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
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
    backgroundColor: "#fff",
    position: "relative",
    zIndex: -5,
  },
  img: {
    width: 300,
    height: 250,
  },
  modeBg: {
    backgroundColor: "#222",
  },
});
