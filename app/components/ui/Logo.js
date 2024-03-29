import { Image, StyleSheet,  View } from "react-native";

export default function Logo({ width = "45%", height = "45%",style }) {
  return (
    <View style={[styles.imgContainer,style]}>
      <Image
        source={require("../../assets/images/goal.png")}
        style={[styles.img, { width, height }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 400,
  },
  img: {
    width: "45%",
    height: "45%",
    resizeMode: "contain",
  },
});
