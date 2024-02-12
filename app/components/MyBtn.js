import { StyleSheet, Text, TouchableOpacity } from "react-native";
// constant colors
import Colors from "../config/Colors";

export default function MyBtn({ children, onPressButton, mode }) {
  return (
    <TouchableOpacity
      style={[styles.container, mode && styles.modeBg]}
      onPress={onPressButton}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, mode && styles.modeText]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 35,
    backgroundColor: Colors.white000,
    elevation: 5,
    position: "relative",
    zIndex: 10,
    overflow: "hidden",
    width:"100%",
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black200,
    shadowColor: Colors.white000,
  },
});
