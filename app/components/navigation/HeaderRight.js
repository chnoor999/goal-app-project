import { StyleSheet, View } from "react-native";
import { memo } from "react";

import SearchIcon from "./SearchIcon";
import HeaderMenu from "./HeaderMenu";

const HeaderRight = ({ searchBarCondition, onPress }) => {
  return (
    <View style={styles.headerRightContainer}>
      <SearchIcon searchBarCondition={searchBarCondition} onPress={onPress} />
      <HeaderMenu />
    </View>
  );
};

export default memo(HeaderRight);

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    gap:5,
    marginRight:11
  },
});
