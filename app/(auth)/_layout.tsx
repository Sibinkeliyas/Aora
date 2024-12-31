import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useGlobalContext } from "@/context/globalProvider";

const AuthLayout = () => {
  const { isLoggedIn, loading, user } = useGlobalContext();
  console.log(isLoggedIn, loading, user);
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-up" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
