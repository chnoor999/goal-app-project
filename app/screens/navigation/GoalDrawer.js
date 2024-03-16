import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import AllGoalScreen from "../goal/AllGoalScreen";
import FavouritesGoalScreen from "../goal/FavouritesGoalScreen";
import Logo from "../../components/ui/Logo";
import Colors from "../../config/color/Colors";
import { useSelector } from "react-redux";
import ToggleModeMenu from "../../components/navigation/ToggleModeMenu";

export default function GoalDrawer() {
  const mode = useSelector((state) => state.mode);

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={styles.drawerContentContainer}>
            <Logo style={{ marginVertical: 25 }} height={"52%"} width={"52%"} />
            <DrawerItemList {...props} />
            <ToggleModeMenu/>
          </View>
        );
      }}
      screenOptions={{
        headerTitleStyle: { fontFamily: "openSansBold" },
        drawerLabelStyle: { fontFamily: "openSansSemiBold" },
        headerShadowVisible: false,
        drawerActiveBackgroundColor: mode ? Colors.black400 : Colors.white300,
        drawerActiveTintColor: mode ? Colors.white000 : Colors.black000,
        drawerInactiveTintColor: mode ? "#e9ecef" : Colors.black200,
        headerTintColor: mode ? Colors.white000 : Colors.black000,
        headerStyle: {
          backgroundColor: mode ? Colors.black200 : Colors.white000,
        },
        drawerStyle: {
          backgroundColor: mode ? Colors.black200 : Colors.white000,
        },
      }}
    >
      <Drawer.Screen name="All Goals" component={AllGoalScreen} />
      <Drawer.Screen name="Favourite Goals" component={FavouritesGoalScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
