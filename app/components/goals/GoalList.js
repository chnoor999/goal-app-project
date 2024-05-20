import { FlatList, StyleSheet, View } from "react-native";
import { memo } from "react";
import { useSelector } from "react-redux";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Colors from "../../config/color/Colors";
import List from "./GoalListItem";
import MessageOverlay from "../ui/MessageOverlay";

const GoalList = ({ data, emptyListMessage }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View style={[styles.container, mode && styles.containerMode]}>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => {
            return <List item={item} />;
          }}
        />
      ) : (
        <MessageOverlay message={emptyListMessage} />
      )}
    </View>
  );
};

export default memo(GoalList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white000,
  },
  containerMode: {
    backgroundColor: Colors.black200,
  },
  contentContainerStyle: {
    paddingVertical: hp(1),
  },
});
