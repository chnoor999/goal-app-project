import { StyleSheet, Text, TextInput, View } from "react-native";
import { memo, useCallback, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { GoalActions } from "../../store/features/goalSlice";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Colors from "../../config/color/Colors";
import MyBtn from "../ui/MyButton";
import MyText from "../ui/MyText";
import LoadingOverLay from "../ui/LoadingOverlay";

const GoalForm = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isEditing = !!route.params?.data;
  const editText = route.params?.data.text;
  const editId = route.params?.data.id;

  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();

  const [styleConditionForInput, setStyleConditionForInput] = useState(false);

  const [inputData, setInputData] = useState(isEditing ? editText : "");
  const [inputIsValid, setInoutIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleConfirm = useCallback(() => {
    const dataIsValid = !!inputData.trim().length;

    if (!dataIsValid) {
      setInoutIsValid(false);
    } else {
      setInoutIsValid(true);
      setIsLoading(true);
      if (isEditing) {
        dispatch(GoalActions.editGoal({ id: editId, text: inputData }));
      } else {
        dispatch(GoalActions.addGoal({ text: inputData }));
      }
      navigation.goBack();
    }
  }, [inputData, isEditing]);

  const onTextChangeHandler = (text) => {
    setInputData(text);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Goal" : "Add Goal",
      animation: isEditing ? "slide_from_right" : "slide_from_bottom",
    });
  }, []);

  if (isLoading) {
    return <LoadingOverLay />;
  }

  return (
    <View>
      <MyText style={[styles.label, mode && styles.labelMode]}>
        What is your goal right now?{" "}
        {!inputIsValid && <Text style={styles.error}>*</Text>}
      </MyText>
      <TextInput
        style={[
          styles.input,
          {
            borderBottomWidth: styleConditionForInput ? 2 : 1,
            backgroundColor: mode ? Colors.black200 : Colors.white000,
            shadowColor: mode ? Colors.white000 : Colors.black000,
            color: mode ? Colors.white200 : Colors.black200,
            borderColor: mode ? "#fff" : "#000",
          },
        ]}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={true}
        onFocus={() => setStyleConditionForInput(true)}
        onBlur={() => setStyleConditionForInput(false)}
        value={inputData}
        onChangeText={(text) => onTextChangeHandler(text)}
      />
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <MyBtn onPress={handleCancel}>Cancel</MyBtn>
        </View>
        <View style={styles.btn}>
          <MyBtn onPress={handleConfirm}>{isEditing ? "Edit" : "Add"}</MyBtn>
        </View>
      </View>
    </View>
  );
};

export default memo(GoalForm);

const styles = StyleSheet.create({
  label: {
    marginVertical: hp(0.5),
    fontSize: hp(1.7),
  },
  labelMode: {
    color: "#fff",
  },
  input: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignSelf: "center",
    borderRadius: 6,
    fontFamily: "openSans",
    width: "100%",
    height: hp(15),
    fontSize: hp(2),
    textAlignVertical: "top",
    paddingHorizontal: wp(1.5),
    paddingVertical: hp(1),
  },
  error: {
    color: "red",
    fontSize: hp(1.6),
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(3.5),
    paddingHorizontal: wp(2),
    gap: wp(4),
  },
  btn: {
    flex: 1,
  },
});
