import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChooseImageSheet from "./ChooseImageSheet";
import { styles } from "../../assets/styles/ProfileStyles";

const URL = "https://pincap.s3.ap-southeast-1.amazonaws.com/Avatar/avatar-default.jpg";
const background = "https://pincap.s3.ap-southeast-1.amazonaws.com/Background/background.jpg";

const SettingSheet = ({ visible, onClose }) => {
  const [showChooseImageModal, setShowChooseImageModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSavePress = () => {
    // Logic to save the changes
    onClose();
  };

  const handleChangePasswordPress = () => {
    setShowChangePassword(!showChangePassword);
  };

  const handleChooseImagePress = () => {
    setShowChooseImageModal(!showChooseImageModal);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.bottomSheet, styles.modalSettingSheet]}>
          <View style={styles.settingTitle}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close-circle" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.settingTitleText}>Edit profile</Text>
            <TouchableOpacity style={styles.buttonSettingSave}>
              <Text>Save</Text>
            </TouchableOpacity>
          </View>
          {/* Nội dung của bottom sheet cài đặt */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.scrollView}>
              <View style={styles.settingContainer}>
                <Image
                  source={{ uri: background }}
                  style={styles.settingBackground}
                />
                <Image source={{ uri: URL }} style={styles.avatar} />
                <TouchableOpacity
                  onPress={handleChooseImagePress}
                  style={styles.settingEditImage}
                >
                  <Ionicons name="build" color={"black"} />
                  <Text style={{ fontSize: 16, marginLeft: 5 }}>
                    Edit Image
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.formContainer}>
                <View style={styles.formInput}>
                  <Text>Name:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                  />
                </View>
                <View style={styles.formInput}>
                  <Text>Email:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <View style={styles.formInput}>
                  <Text>Phone:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                  />
                </View>
              <View style={styles.containerChangePassword}>
              <TouchableOpacity
                  style={styles.changePasswordButton}
                  onPress={handleChangePasswordPress}
                >
                  <Text style={styles.changePasswordButtonText}>
                    Change Password
                  </Text>
                </TouchableOpacity>
              </View>
                {showChangePassword && (
                  <View style={styles.passwordFormContainer}>
                    <View style={styles.formInput}>
                      <Text>Old password:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Old Password"
                        secureTextEntry={true}
                        value={oldPassword}
                        onChangeText={setOldPassword}
                      />
                    </View>
                    <View style={styles.formInput}>
                      <Text>New password:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="New Password"
                        secureTextEntry={true}
                        value={newPassword}
                        onChangeText={setNewPassword}
                      />
                    </View>
                    <View style={styles.formInput}>
                      <Text>Confirm new password:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Confirm New Password"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                      />
                    </View>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      {showChooseImageModal && (
        <ChooseImageSheet
          visible={showChooseImageModal}
          onClose={handleChooseImagePress}
        />
      )}
    </Modal>
  );
};

export default SettingSheet;
