import React, { useEffect, useState } from "react";
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../assets/styles/CreateMediaStyles";

import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const ShowImageScreen = ({ isVisible, onClose }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const navigation = useNavigation();

  const uriImageStorage = async (selectedImage) => {
    navigation.navigate('CreateMediaScreen')
  }
  useEffect(() => {
    if (selectedImage) {
      onClose()

      navigation.navigate('CreateMediaScreen', {
        "uri": selectedImage
      })
    }
  }, [selectedImage])

  const onOpenAi = () => {
    onClose()
    navigation.navigate('WelcomeCreateImage')
  }
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
        aspect: [16, 8],
        quality: 1,
      });
      console.log("abc",result)
      if (!result.cancelled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error selecting image: ", error);
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>

          <View style={styles.bottomSheet}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Bắt đầu tạo ngay</Text>
            </View>
            <TouchableOpacity
              onPress={onOpenAi}
              style={styles.bottomSheetItem}
            >
              <Ionicons name="aperture" size={24} color="#000" />
              <Text style={styles.bottomSheetItemText}>Create AI Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleImagePicker}
              style={styles.bottomSheetItem}
            >
              <Ionicons name="add-circle" size={24} color="#000" />
              <Text style={styles.bottomSheetItemText}>Create Media</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default ShowImageScreen;
