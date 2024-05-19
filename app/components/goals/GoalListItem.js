import { StyleSheet, TouchableOpacity, View } from "react-native";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../config/color/Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import SwipeContent from "./SwipeContent";
import MyText from "../ui/MyText";

const GoalListItem = ({ item }) => {
  const mode = useSelector((state) => state.mode.mode);

  // state for number of line
  const [numberOfLine, setNumberOfLine] = useState(1);

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={[styles.listContainer, mode && styles.listContainerMode]}
      onPress={() => {
        setNumberOfLine((pre) => (pre == 1 ? 0 : 1));
      }}
    >
      <Swipeable
        overshootRight={false}
        renderRightActions={() => <SwipeContent item={item} />}
      >
        <View style={[styles.innerContainer, mode && styles.listContainerMode]}>
          <MyText
            style={[styles.listText, mode && styles.modeText]}
            numberOfLines={numberOfLine}
          >
            {item.text}
          </MyText>
          {item.fav ? (
            <View style={styles.favContainer}>
              <AntDesign name="star" size={hp(1.6)} color="gold" />
            </View>
          ) : null}
          <View style={styles.dataContainer}>
            <MyText style={styles.dateText}>{item.date}</MyText>
          </View>
        </View>
      </Swipeable>
    </TouchableOpacity>
  );
};

export default memo(GoalListItem);

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    elevation: 3,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: Colors.black000,
    marginHorizontal: wp(3),
    marginBottom: hp(1.2),
    overflow: "hidden",
  },
  listContainerMode: {
    backgroundColor: Colors.black300,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f8f9fa",
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  listText: {
    fontSize: hp(2.2),
    width: "85%",
  },
  dataContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    color: Colors.grey000,
    fontSize: hp(1.4),
  },
  favContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  modeText: {
    color: Colors.white000,
  },
});
