import { StyleSheet, Text, View } from "react-native";
import React from "react";
//navigation
import { NavigationContainer } from "@react-navigation/native";
// gesture
import { GestureHandlerRootView } from "react-native-gesture-handler";
// menu
import { MenuProvider } from "react-native-popup-menu";
//screens
import Screen from "./app/screens/Screen";
import MainScreen from "./app/screens/MainScreen";

export default function App() {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MenuProvider>
          <Screen>
            <MainScreen />
          </Screen>
        </MenuProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
