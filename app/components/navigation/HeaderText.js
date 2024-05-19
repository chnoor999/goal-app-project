import { StyleSheet, Text } from "react-native";
import { memo } from "react";
import { useSelector } from "react-redux";

const HeaderText = ({ children }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <Text style={[styles.text, { color: mode ? "#fff" : "#000" }]}>
      {children}
    </Text>
  );
};

export default memo(HeaderText);

const styles = StyleSheet.create({
  text: {
    fontFamily: "openSansBold",
    fontSize: 19,
  },
});
