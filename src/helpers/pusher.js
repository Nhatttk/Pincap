import Pusher from "pusher-js/react-native";
import { configurePushNotifications, sendPushNotificationHandler } from "./pushNotification";
import { useState } from "react";

// Pusher.logToConsole = true;
const pusher = new Pusher("d85c7115593b8273d51d", {
  cluster: "ap1",
  encrypted: true,
  useTLS: true,
  wsHost: "http://172.20.10.14:81",
  authEndpoint: "broadcasting/auth",
  auth: {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTcyLjIwLjEwLjc6ODEvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTYzODQ0NDgsImV4cCI6MTcxNjk4OTI0OCwibmJmIjoxNzE2Mzg0NDQ4LCJqdGkiOiJSMFcySG02N3YzYnRCNjV1Iiwic3ViIjoiOWMxMGViZGUtMDE5YS00ODE0LTk2ODYtNThlNmZiMjUzNDBjIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImVtYWlsIjoiZHV5dGFuMTc3LmRldkBnbWFpbC5jb20iLCJuYW1lIjoidGFuIGR1eSIsInJvbGUiOiJVU0VSIiwiaWQiOiI5YzEwZWJkZS0wMTlhLTQ4MTQtOTY4Ni01OGU2ZmIyNTM0MGMifQ.Jc-UBBU2t6MirybUEED1v206aMBwPHm9yZV25tHKFoM", // Replace with your authentication token
    },
  },
});

// Hàm này để lắng nghe sự kiện từ Pusher và xử lý khi có sự kiện
export const listenToPusherEvents = (userId) => {
  const channel1 = pusher.subscribe(
    `notification-event-${userId}`
  );
  // Replace with your private channel name
  channel1.bind("notification", async (data) => {
    console.log(data);
    const pushToken = await configurePushNotifications();
    sendPushNotificationHandler(pushToken,data)
  });
};


export const unsubscribeFromPusherEvents = (userId) => {
  if (channel) {
    channel.unbind("notification");
    pusher.unsubscribe(`notification-event-${userId}`);
    channel = null;
  }
};
