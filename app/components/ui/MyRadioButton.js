import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { RadioButton } from "react-native-paper";
import { useSelector } from "react-redux";

import MyText from "./MyText";
import Colors from "../../config/color/Colors";

const MyRadioButton = ({ onPress, type, text }) => {
  const mode = useSelector((state) => state.mode.mode);
  const modeType = useSelector((state) => state.mode.type);

  return (
    <View style={styles.optionContainer}>
      <MyText style={mode && styles.modeText}>{text}</MyText>
      <RadioButton
        onPress={onPress}
        status={modeType == type ? "checked" : "unchecked"}
      />
    </View>
  );
};

export default memo(MyRadioButton);

const styles = StyleSheet.create({
  modeText: {
    color: Colors.white000,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
