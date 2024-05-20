import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { GoalActions } from "../../store/features/goalSlice";

import Colors from "../../config/color/Colors";
import List from "./GoalListItem";
import MessageOverlay from "../ui/MessageOverlay";
import Toast from "react-native-toast-message";

const GoalList = ({ data, emptyListMessage }) => {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();

  const [undoData, setUndoData] = useState([]);

  const handleUndo = () => {
    dispatch(GoalActions.setGoal({ data: undoData }));
    Toast.hide();
  };

  const toastConfig = {
    success: () => (
      <View style={[styles.toastContainer, mode && styles.toastContainerDark]}>
        <Text style={[styles.toastTitle, mode && styles.toastTextDark]}>
          Goal deleted
        </Text>
        <TouchableOpacity onPress={handleUndo}>
          <Text style={[styles.undo, mode && styles.toastTextDark]}>UNDO</Text>
        </TouchableOpacity>
      </View>
    ),
  };

  return (
    <View style={[styles.container, mode && styles.containerMode]}>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({ item }) => {
            return <List item={item} setUndoData={setUndoData} />;
          }}
        />
      ) : (
        <MessageOverlay message={emptyListMessage} />
      )}
      <Toast config={toastConfig} />
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
  toastContainer: {
    flexDirection: "row",
    width: wp(80),
    justifyContent: "space-between",
    borderRadius: 6,
    paddingHorizontal: wp(3.5),
    paddingVertical: hp(1),
    backgroundColor: "#eee",
    borderWidth: 1,
    elevation: 6,
  },
  toastTitle: {
    fontSize: hp(1.6),
    fontFamily: "openSans",
  },
  undo: {
    fontFamily: "openSansBold",
    fontSize: hp(1.6),
  },
  toastContainerDark: {
    backgroundColor: "#222",
    borderColor: "#fff",
    shadowColor: "#fff",
  },
  toastTextDark: {
    color: "#fff",
  },
});
