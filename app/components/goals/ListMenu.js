import { Share, StyleSheet, View } from "react-native";
import React from "react";
// icons
import { Entypo } from "@expo/vector-icons";
// menu
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { useNavigation } from "@react-navigation/native";
// constant colors
import Colors from "../../config/color/Colors";
import { useDispatch, useSelector } from "react-redux";
import { GoalActions } from "../../store/features/goalSlice";
import MyText from "../ui/MyText";

export default function ListMenu({ item }) {
  const navigation = useNavigation();

  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const handleDetete = () => {
    dispatch(GoalActions.deleteGoal({ id: item.id }));
  };

  const handleToggleFavourite = () => {
    dispatch(GoalActions.toggleFavourites({ id: item.id }));
  };

  const handleEdit = () => {
    navigation.navigate("manageGoal", { data: item });
  };

  const handleShare = async () => {
    try {
      await Share.share({ message: item.text });
    } catch (error) {
      alert("Share Error try again later");
    }
  };

  return (
    <Menu style={styles.container}>
      <MenuTrigger
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          paddingHorizontal: 5,
        }}
      >
        <Entypo
          name="dots-three-vertical"
          size={18}
          color={mode ? Colors.white000 : Colors.black000}
        />
      </MenuTrigger>
      <MenuOptions style={mode && styles.modeBg}>
        {/* share button ................................................................. */}
        <MenuOption onSelect={handleShare}>
          <View>
            <MyText style={mode && styles.modeText}>Share</MyText>
          </View>
        </MenuOption>
        {/* edit button ................................................................. */}
        <MenuOption onSelect={handleEdit}>
          <View>
            <MyText style={mode && styles.modeText}>Edit</MyText>
          </View>
        </MenuOption>
        {/* favourites button ................................................................. */}
        <MenuOption onSelect={handleToggleFavourite}>
          <View>
            <MyText style={mode && styles.modeText}>
              {item.fav ? "Remove to Favourites " : "Add to Favourites"}
            </MyText>
          </View>
        </MenuOption>
        {/* delete button ................................................................. */}
        <MenuOption onSelect={handleDetete}>
          <View>
            <MyText style={{ color: "tomato", fontWeight: "500" }}>
              Delete
            </MyText>
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: "100%",
    maxHeight: 40,
    borderLeftWidth: 1,
    borderColor: Colors.grey000,
  },
  modeText: {
    color: Colors.white000,
  },
  modeBg: {
    backgroundColor: Colors.black300,
  },
});
