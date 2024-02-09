import { StyleSheet, View } from "react-native";

export default function DownBgDesign({ modes, size = 300 }) {
  return (
    <View style={{ position: "absolute", right: 0, bottom: 0 }}>
      <View
        style={{
          backgroundColor: modes ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.04)",
          height: size,
          width: size,
          borderRadius: 500,
          position: "absolute",
          bottom: -40,
          right: -45,
        }}
      ></View>
      <View
        style={{
          backgroundColor: modes ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.04)",
          height: size / 1.2,
          width: size / 1.2,
          borderRadius: 500,
          position: "absolute",
          bottom: -40,
          right: -45,
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
          bottom: -40,
          right: -45,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
