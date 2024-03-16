import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
//icons
import { Entypo } from "@expo/vector-icons";
// constant colors
import Colors from "../../config/color/Colors";
import { useSelector } from "react-redux";
import ListMenu from "./ListMenu";
import { useNavigation } from "@react-navigation/native";

export default function SwipeContent({ item }) {
  const navigation = useNavigation();
  const mode = useSelector((state) => state.mode);

  const handleEdit = () => {
    navigation.navigate("manageGoal", { data: item });
  };

  return (
    <View style={styles.renderRightActionsConatiner}>
      <View style={[styles.gestureBorder, styles.editIcon]} />
      <View style={styles.firstContainer}>
        <TouchableOpacity style={styles.container} onPress={handleEdit}>
          <Entypo
            name="pencil"
            size={18}
            color={mode ? Colors.white000 : Colors.black000}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.gestureBorder} />
      <ListMenu item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    borderLeftWidth: 1,
    borderColor: Colors.grey000,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: "100%",
    maxHeight: 40,
  },
  renderRightActionsConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  gestureBorder: {
    borderLeftWidth: 1,
    borderColor: Colors.grey000,
  },
  editIcon: {
    marginLeft: 10,
  },
});
