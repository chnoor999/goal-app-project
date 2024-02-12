import { Dimensions, StyleSheet, TouchableHighlight } from "react-native";
// icons
import { FontAwesome } from "@expo/vector-icons";
// constant colors
import Colors from "../config/Colors";
// mobile width static
const windowWidth = Dimensions.get("window").width;

export default function CreateBtn({ onPressButton, modes }) {
  return (
    <TouchableHighlight
      style={[
        styles.container,
        {
          backgroundColor: modes ? Colors.black400 : "#f8f9fa",
        },
      ]}
      onPress={onPressButton}
      underlayColor={modes ? Colors.black500 : Colors.white200}
    >
      <FontAwesome
        name="pencil-square-o"
        size={windowWidth < 380 ? 20 : 24}
        color="red"
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth < 380 ? 50 : 60,
    height: windowWidth < 380 ? 50 : 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 4,
    paddingLeft: 4,
  },
});
