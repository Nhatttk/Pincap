import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeCreateImage from "./CreateImage/WelcomeCreateImage";
import CreateImageAI from "./CreateImage/CreateImageAI";
import CreateMediaScreen from "./CreateImage/CreateMediaScreen";

const Stack = createNativeStackNavigator();

const AIPage = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeCreateImage"
          options={{ headerShown: false }}
          component={WelcomeCreateImage}
        />
        <Stack.Screen
          name="CreateImageAI"
          options={{ headerShown: false }}
          component={CreateImageAI}
        />
        <Stack.Screen
          name="CreateMediaScreen"
          options={{ headerShown: false }}
          component={CreateMediaScreen}
        />
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AIPage;
