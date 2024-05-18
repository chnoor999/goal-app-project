import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import ManageGoalScreen from "../goal/ManageGoalScreen";
import GoalDrawer from "./GoalDrawer";
import Colors from "../../config/color/Colors";

export default function GoalStack() {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "openSansBold" },
        headerShadowVisible: false,
        headerTintColor: mode ? Colors.white000 : Colors.black000,
        headerStyle: {
          backgroundColor: mode ? Colors.black200 : Colors.white000,
        },
      }}
    >
      <Stack.Screen
        name="goal"
        component={GoalDrawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="manageGoal" component={ManageGoalScreen} />
    </Stack.Navigator>
  );
}
