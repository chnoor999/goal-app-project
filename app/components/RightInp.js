import { StyleSheet, TextInput, View } from "react-native";
// constant colors
import Colors from "../config/Colors";

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
        placeholderTextColor={mode ? "#6c757d" : Colors.grey000}
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
    color: Colors.white000,
  },
});
