import { StyleSheet,  View } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../config/color/Colors";
import MyText from "./MyText";

export default function MessageOverlay({message}) {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: mode ? Colors.black200 : "#fff" },
      ]}
    >
      <MyText style={{ color: mode ? "#ffffff76" : "#00000065" }}>{message}</MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
