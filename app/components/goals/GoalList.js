import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../../config/color/Colors";
import List from "./List";

export default function GoalList({ data, onPressIn, onPressOut }) {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View style={[styles.container, mode && styles.containerMode]}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <List item={item} onPressIn={onPressIn} onPressOut={onPressOut} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white000,
    position: "relative",
    zIndex: 10,
  },
  containerMode: {
    backgroundColor: Colors.black200,
  },
});
