import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import { useState } from "react";

export default function Home({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Pressable
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "white" }}>Login Screen</Text>
        </Pressable>
        <Pressable
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Calculator")}
        >
          <Text style={{ color: "white" }}>Calculator Screen</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}
