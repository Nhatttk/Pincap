import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Cấu hình thông báo đẩy
export async function configurePushNotifications() {
  const { status } = await Notifications.getPermissionsAsync();
  let finalStatus = status;

  if (finalStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert(
      'Permission required',
      'Push notifications need the appropriate permission'
    );
    return;
  }

  const pushTokenData = await Notifications.getExpoPushTokenAsync();

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
  return pushTokenData.data;
}

// Gửi thông báo đẩy
export function sendPushNotificationHandler(exponentPushToken,data) {
  fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: exponentPushToken,
      title: data?.title,
      body: data?.content,
      data: {
        imageUrl: './Test.jpg', // Replace with your image URL
      },
    }),
  });
}

// Cấu hình trình xử lý thông báo
export function setNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      };
    },
  });
}

// Yêu cầu quyền thông báo
export async function requestPermissions() {
  const { status } = await Notifications.requestPermissionsAsync();

  if (status !== 'granted') {
    console.log('Quyền thông báo chưa được cấp');
    return;
  }
}
