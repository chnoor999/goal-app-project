import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { GoalActions } from "../../store/features/goalSlice";
const Drawer = createDrawerNavigator();

import AllGoalScreen from "../goal/AllGoalScreen";
import FavouriteGoalScreen from "../goal/FavouriteGoalScreen";
import Colors from "../../config/color/Colors";
import DrawerLabel from "../../components/navigation/DrawerLabel";
import DrawerContent from "../../components/ui/DrawerContent";
import Toast from "react-native-toast-message";

export default function GoalDrawer() {
  const mode = useSelector((state) => state.mode.mode);
  const data = useSelector((state) => state.goal);
  const undoData = useSelector((state) => state.undo);
  const dispatch = useDispatch();

  const allGoalLength = useMemo(() => data.length, [data.length]);
  const favouriteGoalLength = useMemo(
    () => data.filter((item) => item.fav === true).length,
    [data]
  );

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
    <>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
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
            drawerLabel: ({ focused, size, color }) => (
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
          component={FavouriteGoalScreen}
          options={{
            drawerLabel: ({ focused, color, size }) => (
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
      <Toast config={toastConfig} />
    </>
  );
}
const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: "row",
    width: wp(80),
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    paddingHorizontal: wp(3.5),
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
    paddingVertical: hp(1.2),
  },
  toastContainerDark: {
    backgroundColor: "#333",
    borderColor: "#fff",
    shadowColor: "#fff",
  },
  toastTextDark: {
    color: "#fff",
  },
});
