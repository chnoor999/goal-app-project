import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
//icons
import { Entypo } from "@expo/vector-icons";

export default function EditIcon({ onPressButton, modes }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressButton()}>
      <Entypo name="pencil" size={18} color={modes ? "#fff" : "#000"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
});
