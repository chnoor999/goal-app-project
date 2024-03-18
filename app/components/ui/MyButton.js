import { StyleSheet, TouchableOpacity } from "react-native";
// constant colors
import Colors from "../../config/color/Colors";
import { useSelector } from "react-redux";
import MyText from "./MyText";

export default function MyBtn({ children, onPress }) {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <TouchableOpacity
      style={[styles.container, mode && styles.modeBg]}
      onPress={onPress}
      activeOpacity={0.88}
    >
      <MyText style={[styles.text, mode && styles.modeText]}>{children}</MyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 35,
    backgroundColor: "#f8f9fa",
    elevation: 3,
    position: "relative",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black300,
    shadowColor: Colors.white000,
  },
});
