import { StyleSheet, TouchableOpacity } from "react-native";
import { memo } from "react";
import { useSelector } from "react-redux";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Colors from "../../config/color/Colors";
import MyText from "./MyText";

const MyBtn = ({ children, onPress }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <TouchableOpacity
      style={[styles.container, mode && styles.modeBg]}
      onPress={onPress}
      activeOpacity={0.88}
    >
      <MyText style={[styles.text, mode && styles.modeText]}>{children}</MyText>
    </TouchableOpacity>
  );
};

export default memo(MyBtn);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingVertical: hp(0.6),
  },
  text: {
    fontSize: hp(1.8),
    textTransform: "uppercase",
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black300,
    shadowColor: Colors.white000,
  },
});
