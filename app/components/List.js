import { StyleSheet, Text, View } from "react-native";
//gseture
import Swipeable from "react-native-gesture-handler/Swipeable";
// icons
import { AntDesign } from "@expo/vector-icons";
// constatn Colors
import Colors from "../config/Colors";

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
    margin: 10,
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
