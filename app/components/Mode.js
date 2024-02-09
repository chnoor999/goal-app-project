import { StyleSheet, Text, View } from "react-native";
// constant colors
import Colors from "../config/Colors";
// components
import ModeMenu from "./ModeMenu";
import ModeIcons from "./ModeIcons";

export default function Mode({ mode, radioChecked, toggleRadio }) {
  return (
    <View
      style={[
        styles.parentContainer,
        {
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: mode ? Colors.black300 : Colors.white300,
        },
      ]}
    >
      <View style={{width:32}}>
        <ModeIcons radioChecked={radioChecked} />
      </View>
      <View style={styles.container}>
        <Text
          style={[styles.txt, { color: mode ? "#e9ecef" : Colors.black300 }]}
        >
          Theme
        </Text>
        <View>
          <ModeMenu
            modes={mode}
            radioChecked={radioChecked}
            toggleRadio={toggleRadio}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 19,
    paddingVertical: 12,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  txt: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.black200,
  },
});
