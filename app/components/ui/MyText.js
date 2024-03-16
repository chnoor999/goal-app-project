import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MyText({ children, style, ...props }) {
  return (
    <Text style={[{ fontFamily: "openSans" }, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
