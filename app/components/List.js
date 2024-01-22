import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
//gseture
import Swipeable from "react-native-gesture-handler/Swipeable";
// icons
import { AntDesign } from "@expo/vector-icons";

export default function List({ renderRightActions, text, date, fav, modes }) {
  return (
    <View style={[styles.container, modes && styles.modeBg]}>
      <Swipeable renderRightActions={() => renderRightActions}>
        <View style={styles.innerContainer}>
          <Text style={[styles.listText, modes && styles.modeText]}>
            {text}
          </Text>
          {fav ? (
            <View style={styles.favContainer}>
              <AntDesign name="star" size={14} color="gold" />
            </View>
          ) : null}
          <View style={styles.dataContainer}>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth:1,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    elevation: 3,
    shadowColor: "#000",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listText: {
    fontSize: 20,
    width: "85%",
    // borderWidth:1
  },
  dataContainer: {
    // borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 12,
    color: "grey",
  },
  favContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  modeText: {
    color: "#fff",
  },
  modeBg: {
    backgroundColor: "#333",
  },
});
