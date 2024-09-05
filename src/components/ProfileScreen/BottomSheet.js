import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/ProfileStyles";

const BottomSheet = ({ visible, onClose }) => {
  const [confirmBlockVisible, setConfirmBlockVisible] = useState(false);

  const onHandlerBlock = () => {
    setConfirmBlockVisible(true);
  };

  const handleConfirmBlock = () => {
    // Xử lý logic khi người dùng xác nhận block ở đây
    setConfirmBlockVisible(false); // Đóng modal sau khi xác nhận block
  };

  const handleCancelBlock = () => {
    setConfirmBlockVisible(false); // Đóng modal nếu người dùng hủy bỏ
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
            <Text style={styles.titleSheet}>Setting options</Text>
            <TouchableOpacity
              onPress={onHandlerBlock}
              style={styles.bottomSheetItem}
            >
              <Ionicons name="ban" size={24} color="#000" />
              <Text style={styles.bottomSheetItemText}>Blocked</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomSheetItem}>
              <Ionicons name="alert-circle" size={24} color="#000" />
              <Text style={styles.bottomSheetItemText}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        transparent={true}
        animationType="slide"
        visible={confirmBlockVisible}
        onRequestClose={() => setConfirmBlockVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.confirmationModal}>
            <Text style={styles.confirmationTitle}>Confirm Block?</Text>
            <Text style={styles.confirmationMessage}>
              Bạn có chắc chắn muốn block?
            </Text>
            <View style={styles.confirmationButtons}>
              <TouchableOpacity
                onPress={handleConfirmBlock}
                style={styles.confirmButton}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCancelBlock}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

export default BottomSheet;
