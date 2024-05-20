import { Share, StyleSheet } from "react-native";
import { memo, useCallback } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { useNavigation } from "@react-navigation/native";
import { GoalActions } from "../../store/features/goalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { undoActions } from "../../store/features/undoSlice";

import Colors from "../../config/color/Colors";
import MyText from "../ui/MyText";
import Toast from "react-native-toast-message";

const ListMenu = ({ item }) => {
  const goalData = useSelector((state) => state.goal);
  const navigation = useNavigation();

  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(undoActions.setUndoData(goalData));
    dispatch(GoalActions.deleteGoal({ id: item.id }));
    Toast.show({ position: "bottom", bottomOffset: hp(12) });
  }, [item.id, goalData]);

  const handleToggleFavourite = useCallback(() => {
    dispatch(GoalActions.toggleFavourite({ id: item.id }));
  }, [item.id]);

  const handleEdit = useCallback(() => {
    navigation.navigate("manageGoal", { data: item });
  }, [item]);

  const handleShare = useCallback(async () => {
    try {
      await Share.share({ message: item.text });
    } catch (error) {
      alert("Share Error try again later");
    }
  }, [item.text]);

  return (
    <Menu style={styles.container}>
      <MenuTrigger style={styles.container}>
        <Entypo
          name="dots-three-vertical"
          size={hp(2)}
          color={mode ? Colors.white000 : Colors.black000}
        />
      </MenuTrigger>
      <MenuOptions style={mode && styles.modeBg}>
        {/* share button ................................................................. */}
        <MenuOption onSelect={handleShare}>
          <MyText style={[styles.txt, mode && styles.modeText]}>Share</MyText>
        </MenuOption>
        {/* edit button ................................................................. */}
        <MenuOption onSelect={handleEdit}>
          <MyText style={[styles.txt, mode && styles.modeText]}>Edit</MyText>
        </MenuOption>
        {/* favourites button ................................................................. */}
        <MenuOption onSelect={handleToggleFavourite}>
          <MyText style={[styles.txt, mode && styles.modeText]}>
            {item.fav ? "Remove to Favourites " : "Add to Favourites"}
          </MyText>
        </MenuOption>
        {/* delete button ................................................................. */}
        <MenuOption onSelect={handleDelete}>
          <MyText style={[styles.txt, { color: "tomato", fontWeight: "500" }]}>
            Delete
          </MyText>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default memo(ListMenu);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderColor: Colors.grey000,
    height: "100%",
    maxHeight: hp(5),
    width: wp(10),
  },
  txt: {
    fontSize: hp(1.8),
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black300,
  },
});
