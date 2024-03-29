import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function HeaderText({ children }) {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <Text style={[styles.text, { color: mode ? "#fff" : "#000" }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "openSansBold",
    fontSize: 19,
  },
});
