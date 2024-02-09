import { StyleSheet, TouchableOpacity } from "react-native";
// icons
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// constant colors
import Colors from "../config/Colors";

export default function SearchIcon({
  searchBarCondition,
  onPressButton,
  mode,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
      {searchBarCondition ? (
        <Entypo
          name="circle-with-cross"
          size={20}
          color={mode ? Colors.white000 : Colors.black000}
        />
      ) : (
        <FontAwesome
          name="search"
          size={20}
          color={mode ? Colors.white000 : Colors.black000}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
});
