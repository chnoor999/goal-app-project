import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
// mobile width
const windowWidth = Dimensions.get("window").width;
import Colors from "../../config/color/Colors";
import { useDispatch, useSelector } from "react-redux";
import MyBtn from "../ui/MyButton";
import { GoalActions } from "../../store/features/goalSlice";
import MyText from "../ui/MyText";

export default function GoalForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const isEditing = !!route.params?.data;
  const editText = route.params?.data.text;
  const editId = route.params?.data.id;

  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  const [styleConditionForInput, setStyleConditionForInput] = useState(false);

  const [inputData, setInputData] = useState(isEditing ? editText : "");
  const [inputIsValid, setInoutIsValid] = useState(true);

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    const dataIsValid = !!inputData.trim().length;

    if (!dataIsValid) {
      setInoutIsValid(false);
    } else {
      setInoutIsValid(true);
      if (isEditing) {
        dispatch(GoalActions.editGoal({ id: editId, text: inputData }));
      } else {
        dispatch(GoalActions.addGoal({ text: inputData }));
      }
      navigation.goBack();
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Goal" : "Add Goal",
      animation: isEditing ? "slide_from_right" : "slide_from_bottom",
    });
  }, []);

  return (
    <View style={styles.container}>
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
        onChangeText={(text) => setInputData(text)}
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
}

const styles = StyleSheet.create({
  container: {},
  label: {
    paddingVertical: 4,
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
    width: "100%",
    maxWidth: windowWidth < 380 ? 400 : 500,
    alignSelf: "center",
    height: 105,
    borderRadius: 6,
    textAlignVertical: "top",
    padding: 10,
    fontSize: 16,
    fontFamily: "openSans",
  },
  error: {
    color: "red",
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  btn: {
    flex: 1,
  },
});
