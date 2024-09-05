import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "../../assets/styles/NotificationStyles";

const NotificationItem = ({ item, handleNotificationPress }) => {
  
  return (
    <TouchableOpacity onPress={() => handleNotificationPress(item.id)}>
      <View
        style={[
          styles.notification,
          item.is_read ? null:  styles.readNotification,
        ]}
      >
        <View style={styles.userInfo}>
          <Image source={{ uri: item.sender.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>Duy tan</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationContent}>{item.content}</Text>
        </View>
        {item.is_read? null:  <View style={styles.unreadIndicator} /> }
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
