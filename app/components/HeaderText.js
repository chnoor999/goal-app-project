import { StyleSheet, Text } from "react-native";

export default function HeaderText({ children, mode }) {
  return <Text style={[styles.txt, mode && styles.darkText]}>{children}</Text>;
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    fontWeight: "500",
  },
  darkText: {
    color: "#fff",
  },
});
