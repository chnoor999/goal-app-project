import { Image, StyleSheet, View } from "react-native";

export default function DrawerImage() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/goal3.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "60%",
    width: "60%",
  },
});
