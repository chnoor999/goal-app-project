import { Image, StyleSheet, View } from "react-native";
import { memo } from "react";

const Logo = ({ width, height, style }) => {
  return (
    <View style={[styles.imgContainer, style]}>
      <Image
        source={require("../../assets/images/goal.png")}
        style={[styles.img, { width, height }]}
      />
    </View>
  );
};

export default memo(Logo);

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
