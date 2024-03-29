import { StyleSheet, View } from "react-native";

import SearchIcon from "./SearchIcon";
import HeaderMenu from "./HeaderMenu";

export default function HeaderRight({ searchBarCondition, onPress }) {
  return (
    <View style={styles.headerRightContainer}>
      <SearchIcon searchBarCondition={searchBarCondition} onPress={onPress} />
      <HeaderMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
  },
});
