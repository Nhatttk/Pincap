import { StyleSheet, Linking, AppState } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../home_nhat/_layout";
import { getMyProfile } from "../api/Profile/MyProfile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserProfile } from "../redux/UserRedux/MyProfile";
import { listenToPusherEvents } from "../helpers/pusher";
import Navigation from "../navigation/navigation";
import { loginById } from "../api/auth";
import { setToken } from "../redux/auth";

export default function HomePinCap() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.myProfile?.myProfileUser);
  const token = useSelector((state) => state.auth?.tokenProfile);
  useEffect(() => {
    fetchData();
    listenToPusherEvents(userProfile.id);
    checkAppOrigin();
  }, []);

  const checkAppOrigin = async () => {
    try {
      const url = await Linking.getInitialURL();
      if (url) {
        console.log(url);
        const userId = url.split("email_verification=")[1];
        const isFromEmailVerification = await AsyncStorage.getItem(userId);
        if (!isFromEmailVerification) {
          if (url.includes("email_verification=")) {
            console.log("Ứng dụng được mở từ email verification.");
            AsyncStorage.setItem(userId, "true");
            handleLoginById(userId);
          }
        }
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra nguồn gốc của ứng dụng:", error);
    }
  };

  const handleLoginById = async (userId) => {
    try {
      const data = await loginById(userId);
      if (data) {
        console.log(data);
        if (data.token !== null) {
          dispatch(setToken(data.token));
          await AsyncStorage.setItem("token", data.token);
          setIsLogin(true);
        }
      } else {
        console.log("Dang Nhap that bai");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchData = async () => {
    const tokenAsync = await AsyncStorage.getItem("token");
    if (tokenAsync) {
      getMyProfile()
        .then((data) => {
          dispatch(setUserProfile(data.userDetail));
          setIsLogin(true);
        })
        .catch((error) => {
          console.error("Error fetching tags2222:", error);
        });
    } else {
      setIsLogin(false);
    }
  };

  return <>{isLogin ? <Navigation isLogin={isLogin} /> : <Layout />}</>;
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
