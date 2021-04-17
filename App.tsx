import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

import {
  useFonts as useRubik,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

import { AuthNavigator } from "./src/navigation/AuthNavigator";
import { theme } from "./src/infraestructure/theme/index";

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
        <AuthNavigator />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
