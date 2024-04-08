import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from "./screens/calculator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="calculator"
          component={Calculator}
          options={{ title: "Calculator", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
