import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import HomePinCap from "./src/screens/HomePinCap";
import { useEffect, useState } from "react";

import {
  configurePushNotifications,
  sendPushNotificationHandler,
  setNotificationHandler,
  requestPermissions,
} from './src/helpers/pushNotification';


requestPermissions()

setNotificationHandler()
export default function App() {
  const [exponentPushToken, setExponentPushToken] = useState("");
  useEffect(() => {
   setExponentPushToken(configurePushNotifications())
    
  },[]);

  sendPushNotificationHandler(exponentPushToken)
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomePinCap />
      </NavigationContainer>
    </Provider>
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
