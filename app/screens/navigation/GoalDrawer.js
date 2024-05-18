import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import AllGoalScreen from "../goal/AllGoalScreen";
import FavouriteGoalScreen from "../goal/FavouriteGoalScreen";
import Colors from "../../config/color/Colors";
import DrawerLabel from "../../components/navigation/DrawerLabel";
import DrawerContent from "../../components/ui/DrawerContent";

export default function GoalDrawer() {
  const mode = useSelector((state) => state.mode.mode);
  const data = useSelector((state) => state.goal);

  const allGoalLength = useMemo(() => data.length, [data.length]);
  const favouriteGoalLength = useMemo(
    () => data.filter((item) => item.fav === true).length,
    [data]
  );

  return (
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
  );
}
