import { StyleSheet,  TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import ListMenu from "./ListMenu";
import Colors from "../../config/color/Colors";

export default function SwipeContent({ item }) {
  const navigation = useNavigation();
  const mode = useSelector((state) => state.mode.mode);

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
