import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
    // width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 35,
    backgroundColor: "#fff",
    elevation: 5,
    position: "relative",
    zIndex: 10,
    overflow:"hidden"
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
  },
  modeText: {
    color: "#fff",
  },
  modeBg: {
    backgroundColor: "#222",
    shadowColor: "#fff",
  },
});
