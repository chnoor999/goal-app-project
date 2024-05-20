import { StyleSheet, View, TouchableOpacity } from "react-native";
import { memo } from "react";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../config/color/Colors";

const CreateButton = ({ onPress }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.88}
        style={[
          styles.button,
          { backgroundColor: mode ? Colors.black300 : "#f8f9fa" },
        ]}
        onPress={onPress}
      >
        <FontAwesome name="pencil-square-o" size={hp(2.5)} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(CreateButton);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: hp(3),
    right: wp(5),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    paddingLeft: 4,
    height: hp(6.5),
    width: hp(6.5),
    borderRadius: 100,
  },
});
