import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/ProfileStyles";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ChooseImageSheet = ({ visible, onClose }) => {
    const [selectedImage, setSelectedImage] = useState("");
    let initialPermissionStatus = null;
    const handleImagePicker = async () => {
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        // Nếu chưa yêu cầu quyền truy cập trước đó và chưa từ chối, yêu cầu quyền truy cập
  
        if (initialPermissionStatus === "granted") {
          if (status !== "granted") {
            alert("Permission to access media library is required!");
            initialPermissionStatus = "granted";
            return;
          }
        }
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
      }
  
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setSelectedImage(result.uri);
        }
      } catch (error) {
        console.error("Error selecting image: ", error);
      }
    };
  
    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay}>
            <View style={styles.bottomSheet}>
              <Text style={styles.titleSheet}>
                Choose upload avatar and background.
              </Text>
              <TouchableOpacity
                onPress={handleImagePicker}
                style={styles.bottomSheetItem}
              >
                <Ionicons name="person-circle" size={24} color="#000" />
                <Text style={styles.bottomSheetItemText}>Image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleImagePicker}
                style={styles.bottomSheetItem}
              >
                <Ionicons name="grid" size={24} color="#000" />
                <Text style={styles.bottomSheetItemText}>Background</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
export default ChooseImageSheet;
