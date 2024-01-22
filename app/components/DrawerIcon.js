import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function DrawerIcon({ star, goal }) {
  return (
    <View style={styles.container}>
      {star && <AntDesign name="staro" size={24} color="grey" />}
      {goal && <SimpleLineIcons name="target" size={24} color="grey" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
