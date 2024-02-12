import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//gseture
import Swipeable from "react-native-gesture-handler/Swipeable";
// icons
import { AntDesign } from "@expo/vector-icons";
// constatn Colors
import Colors from "../config/Colors";
import { useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
// mobile width static
const windowWidth = Dimensions.get("window").width;

export default function List({ renderRightActions, text, date, fav, modes }) {
  // state for number of line
  const [numberOfLine, setNumberOfLine] = useState(1);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, modes && styles.modeBg]}
      onPress={() => setNumberOfLine((pre) => (pre == 1 ? 0 : 1))}
    >
      <Swipeable renderRightActions={() => renderRightActions}>
        <View style={styles.innerContainer}>
          <Text
            style={[styles.listText, modes && styles.modeText]}
            numberOfLines={numberOfLine}
          >
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: windowWidth < 380 ? 8 : 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f8f9fa",
    elevation: 3,
    shadowColor: Colors.black000,
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
  modeBg: {
    backgroundColor: Colors.black300,
  },
});
