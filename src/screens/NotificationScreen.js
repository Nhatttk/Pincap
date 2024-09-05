import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import Header from "../components/Notification/Header";
import NotificationItem from "../components/Notification/NotificationItem";
import MarkAllAsReadButton from "../components/Notification/MarkAllAsReadButton";
import styles from "../assets/styles/NotificationStyles";
import { getAllNotification } from "../api/Notification/GetAllNotification";
import { MarkReadById } from "../api/Notification/MarkReadById";
import { MarkReadAll } from "../api/Notification/MarkReadAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
// import { Echo } from "laravel-echo";
import Pusher from "pusher-js/react-native";
// import {
//   Pusher
// } from "@pusher/pusher-websocket-react-native";

function NotificationScreen() {
  const [selectedButton, setSelectedButton] = useState("All");
  const [getAllNoti, setGetAllNoti] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const myProfile = useSelector((state) => state.myProfile?.myProfileUser);

  useEffect(() => {
    fetchNotification();
  }, []);



  const fetchNotification = async () => {
    await getAllNotification()
      .then((data) => {
        setGetAllNoti(data.notification);
      })
      .catch((error) => {
        // console.error("hello" + error);
      });
  };

  const handleNotificationPress = async (id) => {
    await MarkReadById(id)
      .then((data) => {
        const updatedNotifications = getAllNoti.map((notification) =>
          notification.id === id
            ? { ...notification, is_read: true }
            : notification
        );
        setGetAllNoti(updatedNotifications);
        setFilteredNotifications(
          filteredNotifications.filter((notification) => notification.id !== id)
        );
        console.log(data.message);
      })
      .catch((error) => {
        console.error("123123" + error);
      });
  };

  const handleMarkAllAsRead = () => {
    MarkReadAll()
      .then((data) => {
        const updatedNotifications = getAllNoti.map((notification) => ({
          ...notification,
          is_read: true,
        }));
        setGetAllNoti(updatedNotifications);
        if (selectedButton === "Unread") {
          setFilteredNotifications(
            updatedNotifications.filter((notification) => !notification.is_read)
          );
        }
      })
      .catch((error) => {
        console.error("123123" + error);
      });
  };

  const handleFilterButtonClick = (buttonType) => {
    if (buttonType === "Unread") {
      setFilteredNotifications(
        getAllNoti.filter((notification) => !notification.is_read)
      );
    } else {
      setFilteredNotifications(getAllNoti);
    }
    setSelectedButton(buttonType);
  };

  return (
    <SafeAreaView style={styles.container}>
      <MarkAllAsReadButton handleMarkAllAsRead={handleMarkAllAsRead} />
      <Header
        selectedButton={selectedButton}
        handleFilterButtonClick={handleFilterButtonClick}
      />
      <Text style={styles.title}>List of notifications</Text>
      {selectedButton === "All" ? (
        getAllNoti.length === 0 ? (
          <Text style={{ justifyContent: "center", alignItems: "center" }}>
            No notification
          </Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={getAllNoti}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <NotificationItem
                item={item}
                handleNotificationPress={handleNotificationPress}
              />
            )}
          />
        )
      ) : filteredNotifications.length === 0 ? (
        <Text style={{ justifyContent: "center", alignItems: "center" }}>
          No notification
        </Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredNotifications}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <NotificationItem
              item={item}
              handleNotificationPress={handleNotificationPress}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

export default NotificationScreen;
