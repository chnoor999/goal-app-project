import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
// mobile width static
const windowWidth = Dimensions.get("window").width;

export default function DrawerImage() {
  // mobile width dynamic
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          height:
            windowWidth < 380
              ? width > 500
                ? 130
                : 150
              : width > 500
              ? 150
              : 200,
        },
      ]}
    >
      <Image style={styles.img} source={require("../assets/goal3.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "60%",
    width: "60%",
    resizeMode: "contain",
  },
});
