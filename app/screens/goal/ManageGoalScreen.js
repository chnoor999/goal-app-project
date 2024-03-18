import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
// mobile width
const windowWidth = Dimensions.get("window").width;

import Logo from "../../components/ui/Logo";
import GoalForm from "../../components/manageGoal/GoalForm";
import { useSelector } from "react-redux";
import Colors from "../../config/color/Colors";

export default function ManageGoalScreen() {
  const mode= useSelector(state=>state.mode.mode)
  
  return (
    <View style={[styles.container, mode && styles.containerMode]}>
      <Logo />
      <GoalForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: windowWidth < 380 ? 12 : 20,
    backgroundColor:"#fff"
  },
  containerMode: {
    backgroundColor: Colors.black200,
  },
});
