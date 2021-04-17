import React, { useState, useEffect, createContext } from "react";
import auth from "@react-native-firebase/auth";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export const AuthContext = createContext(null);

export const AuthNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return user ? (
    <AuthContext.Provider value={user}>
      <AppStack />
    </AuthContext.Provider>
  ) : (
    <AuthStack />
  );
};
