// Trong component RadioButtonWithImage

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

const RadioButtonWithImage = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState({
    height: 512,
    width: 512,
    style_preset: "",
  });

  useEffect(() => {
    onSelect(selectedValue);
  }, [selectedValue]);

  const handleRadioChange = (value) => {
    setSelectedValue({
      ...selectedValue,
      style_preset: value
    });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.radioGroup}>
        {options.map((option, key) => (
          <View style={styles.optionContainer} key={key}>
            <TouchableOpacity
              key={option.value}
              style={[
                styles.radioButton,
                selectedValue.style_preset === option.value && styles.selected,
              ]}
              onPress={() => handleRadioChange(option.value)}
            >
              <Image source={option.image} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.selectedValueText}>{option.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  optionContainer: {
    flexDirection: "column",
  },
  radioButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selected: {
    borderColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  
  selectedValueText: {
    color: "white",
    marginTop: 20,
    fontSize: 12,
    alignSelf: "center", // Để căn giữa văn bản
  },
  tickButton: {
    alignSelf: "center",
    marginTop: 20,
    color: "#007bff",
    fontSize: 16,
  },
});

export default RadioButtonWithImage;
