import { StyleSheet, Text } from "react-native";
// constant colors
import Colors from "../config/Colors";

export default function HeaderText({ children, mode }) {
  return <Text style={[styles.txt, mode && styles.darkText]}>{children}</Text>;
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    fontWeight: "500",
  },
  darkText: {
    color: Colors.white000,
  },
});
