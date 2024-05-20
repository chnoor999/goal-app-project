import { StyleSheet, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ListMenu from "./ListMenu";
import Colors from "../../config/color/Colors";

const SwipeContent = ({ item }) => {
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
            size={hp(2)}
            color={mode ? Colors.white000 : Colors.black000}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.gestureBorder} />
      <ListMenu item={item} />
    </View>
  );
};

export default memo(SwipeContent);

const styles = StyleSheet.create({
  firstContainer: {
    borderLeftWidth: 1,
    borderColor: Colors.grey000,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    maxHeight: hp(5),
    width: wp(10),
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
    marginLeft: wp(2),
  },
});
