import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../../assets/styles/NotificationStyles";

const Header = ({ selectedButton, handleFilterButtonClick }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => handleFilterButtonClick("All")}
        style={[
          styles.headerButton,
          selectedButton === "All"
            ? [styles.selectedHeaderButton, styles.selectedHeaderText]
            : null,
        ]}
      >
        <Text
          style={[
            styles.headerButtonText,
            selectedButton === "All" ? styles.selectedHeaderText : null,
          ]}
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleFilterButtonClick("Unread")}
        style={[
          styles.headerButton,
          selectedButton === "Unread"
            ? [styles.selectedHeaderButton, styles.selectedHeaderText]
            : null,
        ]}
      >
        <Text
          style={[
            styles.headerButtonText,
            selectedButton === "Unread" ? styles.selectedHeaderText : null,
          ]}
        >
          Unread
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;