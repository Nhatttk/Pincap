import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/ProfileStyles";
import SettingSheet from "./SettingSheet";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { resetUserProfile } from "../../redux/UserRedux/MyProfile";


const ChooseSettingSheet = ({ visible, onClose }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const myProfile = useSelector((state) => state.myProfile?.myProfileUser);

    const [showSettingSheet, setShowSettingSheet] = useState(false);

    const handleShowSettingProfile = () => {
        setShowSettingSheet(!showSettingSheet)
    }

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token')
        dispatch(resetUserProfile());
        onClose()
        navigation.navigate('SignInScreen')
    }
  
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
                onPress={handleShowSettingProfile}
                style={styles.bottomSheetItem}
              >
                <Ionicons name="person-circle" size={24} color="#000" />
                <Text style={styles.bottomSheetItemText}>Setting profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLogout}
                style={styles.bottomSheetItem}
              >
                <Ionicons name="grid" size={24} color="#000" />
                <Text style={styles.bottomSheetItemText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <SettingSheet visible={showSettingSheet} onClose={handleShowSettingProfile}/>

      </Modal>
    );
  };
export default ChooseSettingSheet;
