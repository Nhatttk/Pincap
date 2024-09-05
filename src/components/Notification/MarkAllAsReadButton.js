import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../assets/styles/NotificationStyles";

const MarkAllAsReadButton = ({ handleMarkAllAsRead }) => {
  return (
    <TouchableOpacity
      onPress={handleMarkAllAsRead}
      style={styles.markAllAsRead}
    >
      <Ionicons
        name="checkmark"
        size={20}
        color="black"
        style={{ marginRight: 5 }}
      />
      <Text>Mark All As Read</Text>
    </TouchableOpacity>
  );
};

export default MarkAllAsReadButton;
