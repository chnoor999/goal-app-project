import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MyBtn({ children, onPressButton, mode }) {
  return (
    <TouchableOpacity
      style={[styles.container, mode && styles.modeBg]}
      onPress={onPressButton}
    >
      <Text style={[styles.text, mode && styles.modeText]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 35,
    backgroundColor: "#fff",
    elevation: 5,
    position: "relative",
    zIndex: 10,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
  },
  modeText: {
    color: "#fff",
  },
  modeBg: {
    backgroundColor: "#222",
    shadowColor: "#fff",
  },
});
