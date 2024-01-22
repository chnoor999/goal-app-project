import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerSwitch({ value, onChange, mode }) {
  return (
    <View
      style={[
        styles.parentContainer,
        {
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: mode ? "#333" : "#eee",
        },
      ]}
    >
      <MaterialCommunityIcons name="theme-light-dark" size={24} color="grey" />
      <View style={styles.container}>
        <Text style={[styles.txt, { color: mode ? "#e9ecef" : "#222" }]}>
          {mode ? "Disable dark mode" : "Enable dark mode"}
        </Text>
        <Switch value={value} onValueChange={onChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    gap: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  txt: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
});
