import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function RightInp({
  myRef,
  setSearchData,
  myPlaceholder,
  mode,
}) {
  return (
    <View>
      <TextInput
        ref={myRef}
        style={[styles.inp, mode && styles.darkText]}
        placeholder={myPlaceholder}
        onChangeText={(text) => setSearchData(text)}
        placeholderTextColor={mode ? "#6c757d" : "grey"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inp: {
    // borderWidth:1,
    width: 260,
    fontSize: 16,
  },
  darkText: {
    color: "#fff",
  },
});
