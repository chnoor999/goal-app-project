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
import DrawerLabel from "../../components/navigation/DrawerLabel";

export default function GoalDrawer() {
  const mode = useSelector((state) => state.mode);
  const data = useSelector(state=>state.goal)

  const allGoalLength = data.length
  const favouriteGoalLength = data.filter(item=>item.fav===true).length

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={styles.drawerContentContainer}>
            <Logo style={{ marginVertical: 25 }} height={"52%"} width={"52%"} />
            <DrawerItemList {...props} />
            <ToggleModeMenu />
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
      <Drawer.Screen
        name="All Goals"
        component={AllGoalScreen}
        options={{
          drawerLabel: ({ focused,size, color }) => (
            <DrawerLabel
              size={size}
              color={color}
              focused={focused}
              label={"All Goals"}
              count={allGoalLength}
              goal
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite Goals"
        component={FavouritesGoalScreen}
        options={{
          drawerLabel: ({ focused,color, size }) => (
            <DrawerLabel
              size={size}
              color={color}
              focused={focused}
              label={"Favourite Goals"}
              count={favouriteGoalLength}
              star
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
