import { StyleSheet, View } from "react-native";
// icons
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
// constant colors
import Colors from "../config/Colors";

export default function DrawerIcon({ star, goal }) {
  return (
    <View style={styles.container}>
      {star && <AntDesign name="staro" size={24} color={Colors.grey000} />}
      {goal && (
        <SimpleLineIcons name="target" size={24} color={Colors.grey000} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
