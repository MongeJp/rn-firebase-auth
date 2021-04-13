import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "./src/features/Login/screens/LoginScreen";
import { theme } from "./src/infraestructure/theme/index";
import {
  useFonts as useRubik,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

const Stack = createStackNavigator();

export default function App() {
  const [rubikLoaded] = useRubik({
    Rubik_400Regular,
    Rubik_500Medium,
  });

  if (!rubikLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
