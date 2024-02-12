import { StyleSheet, TouchableOpacity, View } from "react-native";
//icons
import { Entypo } from "@expo/vector-icons";
// constant colors
import Colors from "../config/Colors";

export default function EditIcon({ onPressButton, modes }) {
  return (
    <View style={styles.firstContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPressButton()}
      >
        <Entypo
          name="pencil"
          size={18}
          color={modes ? Colors.white000 : Colors.black000}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    borderLeftWidth: 1,
    borderColor: Colors.grey000,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: "100%",
    maxHeight: 40,
  },
});
