import { StyleSheet, Text, View,ActivityIndicator } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../../config/color/Colors";

export default function LoadingOverlay() {
  const mode = useSelector((state) => state.mode);

  return (
    <View
      style={[styles.container, { backgroundColor: mode ? Colors.black200 : "#fff" }]}
    >
      <ActivityIndicator size={"large"} color={mode ? "#fff" : "#000"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
});
