import { StyleSheet, Text, View } from "react-native";
// constant colors
import Colors from "../config/Colors";

export default function DrawerLabel({
  icon,
  color,
  focused,
  size,
  title,
  count,
}) {
  return (
    <View style={styles.firstContainer}>
      {icon}
      <View style={styles.container}>
        <Text
          style={[
            { color: color, fontSize: size, fontWeight: "500" },
            focused && styles.bold,
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            { color: Colors.grey000, fontSize: size, fontWeight: "500" },
            focused && styles.bold,
          ]}
        >
          {count}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: "row",
    gap: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  bold: {
    fontWeight: "700",
  },
});
