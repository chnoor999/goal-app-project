import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../../config/color/Colors";

const windowWidth = Dimensions.get("window").width;

export default function CreateButton({ onPress }) {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.88}
        style={[
          styles.button,
          { backgroundColor: mode ? Colors.black300 : "#f8f9fa" },
        ]}
        onPress={onPress}
      >
        <FontAwesome
          name="pencil-square-o"
          size={windowWidth < 380 ? 20 : 24}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    right: 18,
    zIndex: 10,
  },
  button: {
    width: windowWidth < 380 ? 50 : 60,
    height: windowWidth < 380 ? 50 : 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 3,
    paddingLeft: 4,
  },
});
