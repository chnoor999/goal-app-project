import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import Colors from "../../config/color/Colors";

const DrawerLabel = ({ star, goal, color, focused, size, label, count }) => {
  return (
    <View style={styles.firstContainer}>
      {star && <AntDesign name="staro" size={24} color={Colors.grey000} />}
      {goal && (
        <SimpleLineIcons name="target" size={24} color={Colors.grey000} />
      )}
      <View style={styles.container}>
        <Text
          style={[
            { color: color, fontSize: size, fontFamily: "openSansSemiBold" },
            focused && styles.bold,
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            {
              color: Colors.grey000,
              fontSize: size,
              fontFamily: "openSansSemiBold",
            },
          ]}
        >
          {count}
        </Text>
      </View>
    </View>
  );
};

export default memo(DrawerLabel);

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: "row",
    gap: 13,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  bold: {
    fontFamily: "openSansBold",
  },
});
