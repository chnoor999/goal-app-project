import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

import Colors from "../../config/color/Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import SwipeContent from "./SwipeContent";
import MyText from "../ui/MyText";

export default function List({ item, onPressIn, onPressOut }) {
  const mode = useSelector((state) => state.mode.mode);

  // state for number of line
  const [numberOfLine, setNumberOfLine] = useState(1);

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={[styles.listContainer, mode && styles.listContainermode]}
      onPress={() => {
        setNumberOfLine((pre) => (pre == 1 ? 0 : 1));
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Swipeable renderRightActions={() => <SwipeContent item={item} />}>
        <View style={styles.innerContainer}>
          <MyText
            style={[styles.listText, mode && styles.modeText]}
            numberOfLines={numberOfLine}
          >
            {item.text}
          </MyText>
          {item.fav ? (
            <View style={styles.favContainer}>
              <AntDesign name="star" size={14} color="gold" />
            </View>
          ) : null}
          <View style={styles.dataContainer}>
            <MyText style={styles.dateText}>{item.date}</MyText>
          </View>
        </View>
      </Swipeable>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    margin: windowWidth < 380 ? 8 : 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    elevation: 3,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: Colors.black000,
  },
  listContainermode: {
    backgroundColor: Colors.black300,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listText: {
    fontSize: 20,
    width: "85%",
  },
  dataContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 12,
    color: Colors.grey000,
  },
  favContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  modeText: {
    color: Colors.white000,
  },
});
