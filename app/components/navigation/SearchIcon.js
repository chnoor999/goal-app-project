import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../../config/color/Colors";

export default function SearchIcon({ searchBarCondition, onPress }) {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
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
