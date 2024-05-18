import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider, useDispatch, useSelector } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";
import { useFonts } from "expo-font";
import { Store } from "./app/store/store";
import { StatusBar } from "expo-status-bar";
import { ModeActions } from "./app/store/features/modeSlice";

import GoalStack from "./app/screens/navigation/GoalStack";
import Colors from "./app/config/color/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Root = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const [fontLoaded] = useFonts({
    openSans: require("./app/config/fonts/OpenSans-Regular.ttf"),
    openSansBold: require("./app/config/fonts/OpenSans-Bold.ttf"),
    openSansSemiBold: require("./app/config/fonts/OpenSans-SemiBold.ttf"),
  });

  useEffect(() => {
    const getMode = async () => {
      try {
        let data = await AsyncStorage.getItem("mode");
        data = JSON.parse(data);
        if (data) {
          dispatch(ModeActions.setModeType({ text: data }));
        }
        setIsLoading(false);
      } catch (err) {
        alert("Error Occurred Try Again!");
      }
    };

    getMode();
  }, []);

  if (!fontLoaded || isLoading) {
    return null;
  }

  return (
    <>
      <StatusBar
        style={mode ? "light" : "dark"}
        translucent={true}
        backgroundColor={mode ? Colors.black200 : Colors.white000}
      />
      <GoalStack />
    </>
  );
};

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MenuProvider>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
          </MenuProvider>
        </GestureHandlerRootView>
      </Provider>
    </>
  );
}
