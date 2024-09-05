import { Modal, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./SearchScreen";

import MyProfileScreen from "./MyProfileScreen";

import { useEffect, useState } from "react";
import Home from "../home_nhat/home";
import Navigation from "../navigation/navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShowImageScreen from "./ShowImageScreen";
import AIPage from "./AITools/AIPage";
import CreateMediaScreen from "./AITools/CreateImage/CreateMediaScreen";
import WelcomeCreateImage from "./AITools/CreateImage/WelcomeCreateImage";
import CreateImageAI from "./AITools/CreateImage/CreateImageAI";
import EditPhotoScreen from "./EditPhoto";
import ChooseAlbumScreen from "./ChooseAlbum";
import NotificationScreen from "./NotificationScreen";
import { HeaderBackButton } from "@react-navigation/stack";
// import Layout from "./home_nhat/_layout";
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const onClose = () => {
    setModalVisible(false);
  };
  const getTabBarVisibility = (route) => {
    const routeName = route.name;
    if (routeName === "WelcomeCreateImage" || routeName === "CreateImageAI") {
      return "none";
    }
    return "flex";
  };
  return (
    <>
      <Tab.Navigator
        initialRouteName="Notification"
        activeColor="black"
        backgroundColor="white"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "black",
          },
          tabBarActiveTintColor: "black",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="WelcomeCreateImage"
          component={WelcomeCreateImage}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
            tabBarButton: () => null,
            
          }}
        />
        {/* <Tab.Screen
            name="EditPhoto"
            component={EditPhotoScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" size={size} color={color} />
              ),
              tabBarButton: () => null,
            }}
          /> */}
        <Tab.Screen
          name="CreateImageAI"
          component={CreateImageAI}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
            tabBarButton: () => null
          }}
        />
        <Tab.Screen
          name="CreateMediaScreen"
          component={CreateMediaScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
            tabBarButton: () => null,
          }}
        />
        {/* <Tab.Screen
            name="ChooseAlbum"
            component={ChooseAlbumScreen}
            options={{
              headerShown: true,
              title: 'Lưu vào',
              headerTitleAlign: 'center',
              tabBarLabel: "",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" size={size} color={color} />
              ),
              tabBarButton: () => null,
            }}
          /> */}
        <Tab.Screen
          name="ShowImageScreen"
          // children={() => <ShowImageScreen isVisible={modalVisible} onClose={onClose} />}
          children={() => <></>}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="add-circle"
                size={size}
                color={color}
                onPress={() => {
                  setModalVisible();
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" size={size} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        {/* man hinh them ânh */}

        {/* <Tab.Screen
                    name="detailMedia"
                    component={DetailMediaScreen}
                    options={{
                        tabBarLabel: "",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="document" size={size} color={color} />
                        ),
                    }}
                /> */}
        <Tab.Screen
          name="User"
          component={MyProfileScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

      <ShowImageScreen isVisible={modalVisible} onClose={onClose} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarContainer: {
    backgroundColor: "#fff", // Màu nền của thanh tab
    height: 50, // Chiều cao của thanh tab
    shadowColor: "#000", // Màu của bóng
    shadowOffset: { width: 0, height: 2 }, // Độ dịch chuyển của bóng
    shadowOpacity: 0.25, // Độ mờ của bóng
    shadowRadius: 3.84, // Bán kính của bóng
    elevation: 5, // Chỉ định bóng cho Android
  },
});
