import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from "./screens/calculator";
import Home from "./screens/home";
import Login from "./screens/login";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home", headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login", headerShown: true }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{ title: "Calculator", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
