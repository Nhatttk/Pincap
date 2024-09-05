// Navigation.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateMediaScreen from "../screens/AITools/CreateImage/CreateMediaScreen";
import AdvancedSettingsScreen from "../screens/AdvancedSettings";
import AddTagScreen from "../screens/AddTag";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import EditPhotoScreen from "../screens/EditPhoto";
import ChooseAlbumScreen from "../screens/ChooseAlbum";
import SearchAlbumScreen from "../screens/SearchAlbum";
import ImagePickerExampleScreen from "../screens/ImagePickerExample";
import CreateTableScreen from "../screens/CreateTable";
import AlbumScreen from "../screens/AlbumScreen";
import ShowImageScreen from "../screens/ShowImageScreen";
import Home from "../screens/Home";
import HomePinCap from "../screens/HomePinCap";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../home_nhat";
import SignInScreen from "../screens/Authen/sign-in";
import SignUpScreen from "../screens/Authen/sign-up";
import DetailMediaScreen from "../screens/DetailMediaScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>

    {/* trang dấu cộng lấy ra 2 trang Create AI img và Create media */}
      <Stack.Screen
        name="HomePinCap"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomePinCap}
      />
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
        name="SignUpScreen"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="ImagePickerExample"
        component={ImagePickerExampleScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShowImage"
        component={ShowImageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchAlbum"
        component={SearchAlbumScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailMediaScreen"
        component={DetailMediaScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateTable"
        component={CreateTableScreen}
        options={{
          // headerShown: false
          headerTitle: "Tạo ghim",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity style={styles.buttonSubmit} onPress={() => null}>
              <Text style={styles.buttonText}>Tạo</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CreateMedia"
        component={CreateMediaScreen}
        options={{
          headerTitle: "Tạo ghim",
          headerTitleAlign: "center",
        }}
      />
      {/* <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            headerTitle: "Tạo ghim",
            headerTitleAlign: "center",
          }}
        /> */}
      <Stack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{
          // headerTitle: 'Album',
          // headerTitleAlign: 'center'
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseAlbum"
        component={ChooseAlbumScreen}
        options={{
          headerTitle: "Lưu vào",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="AdvancedSettings"
        component={AdvancedSettingsScreen}
        options={{
          headerTitle: "Cài đặt nâng cao",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="AddTag"
        component={AddTagScreen}
        options={({ navigation }) => ({
          headerTitle: "Gắn thẻ chủ đề",
          headerTitleAlign: "center",
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={styles.buttonSubmit}
          //     onPress={() => navigation.navigate("EditPhoto", {uri})}
          //   >
          //     <Text style={styles.buttonText}>Hoàn tất</Text>
          //   </TouchableOpacity>
          // ),
        })}
      />
      <Stack.Screen
        name="EditPhoto"
        style={styles.editPhoto}
        component={EditPhotoScreen}
        options={{
          headerTitle: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black", // Màu nền đen cho header
          },
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity style={styles.buttonSubmit} onPress={() => null}>
              <Text style={styles.buttonText}>Hoàn tất</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  buttonSubmit: {
    marginRight: 10,
    backgroundColor: "red", // Màu nền đỏ
    borderRadius: 20, // Độ bo tròn
    paddingVertical: 10, // Khoảng cách dọc của nút
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white", // Màu chữ trắng
    textAlign: "center", // Canh giữa chữ
    fontWeight: "bold",
  },
  editPhoto: {
    backgroundColor: "black",
  },
});
