import { StyleSheet, View } from "react-native";

export default function BgDesign({ size = 300, modes }) {
  return (
    <View style={{ flex: 1, position: "absolute" }}>
      <View
        style={{
          backgroundColor: modes ? "rgba(255,255,255,.035)" : "rgba(0,0,0,.04)",
          height: size,
          width: size,
          borderRadius: 500,
          position: "absolute",
          top: -40,
          left: -45,
        }}
      ></View>
      <View
        style={{
          backgroundColor: modes ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.04)",
          height: size / 1.2,
          width: size / 1.2,
          borderRadius: 500,
          position: "absolute",
          top: -40,
          left: -45,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          backgroundColor: modes ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.04)",
          height: size / 1.5,
          width: size / 1.5,
          borderRadius: 100,
          position: "absolute",
          top: -40,
          left: -45,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
