import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import RadioButtonWithImage from "../../../components/RadioOptions/RadioButtonWithImage";
import { options } from "../../../helpers/options";

const OptionsImageAI = ({ isVisible, onClose, setOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleConfirm = () => {
    setOptions({
        ...selectedOptions
    });
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback>
        <View style={styles.overlay}>
          <View style={styles.bottomSheet}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Cài đặt</Text>
              <View style={styles.btnHeader}>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <Ionicons name="close" size={24} color="#fff" />
                </TouchableOpacity>
                {/* Nút "tick" */}
                <TouchableOpacity onPress={handleConfirm}>
                  <Ionicons name="checkmark" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.optionStyle}>
              <RadioButtonWithImage
                options={options}
                selectedOptions={selectedOptions}
                onSelect={(selectedValue) => {
                  setSelectedOptions(selectedValue);
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  btnHeader: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  closeButton: {
    padding: 10,
  },
  bottomSheet: {
    backgroundColor: "#1E1D27",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});

export default OptionsImageAI;
