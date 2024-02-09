import { StyleSheet, TouchableOpacity } from "react-native";
//icons
import { Entypo } from "@expo/vector-icons";
// constant colors
import Colors from "../config/Colors";

export default function EditIcon({ onPressButton, modes }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressButton()}>
      <Entypo
        name="pencil"
        size={18}
        color={modes ? Colors.white000 : Colors.black000}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  },
});
