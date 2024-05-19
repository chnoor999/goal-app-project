import { StyleSheet, TouchableOpacity } from "react-native";
import { memo } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../../config/color/Colors";

const SearchIcon = ({ searchBarCondition, onPress }) => {
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
};

export default memo(SearchIcon);

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
