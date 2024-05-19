import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { useSelector } from "react-redux";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Colors from "../../config/color/Colors";
import MyText from "./MyText";

const MessageOverlay = ({ message }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: mode ? Colors.black200 : "#fff" },
      ]}
    >
      <MyText style={[styles.txt, { color: mode ? "#ffffff76" : "#00000065" }]}>
        {message}
      </MyText>
    </View>
  );
};

export default memo(MessageOverlay);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: hp(1.8),
  },
});
