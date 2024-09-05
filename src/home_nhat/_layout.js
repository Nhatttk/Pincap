import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./index";
import Home from "./home/index";
import SearchView from "./search/index";
import Details from "./details/details";
import SignInScreen from "../screens/Authen/sign-in";
import SignUpScreen from "../screens/Authen/sign-up";
import HomeScreen from "../screens/HomeScreen";
import HomePinCap from "../screens/HomePinCap";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="SignInScreen"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      {/* <Stack.Screen
        name="HomePinCap"
        options={{ headerShown: false }}
        component={HomePinCap}
      /> */}

      <Stack.Screen
        name="SignUpScreen"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Layout;
