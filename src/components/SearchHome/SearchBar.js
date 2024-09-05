import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../assets/styles/SearchStyles";

const SearchBar = ({ searchKeyword, handleSearch, handleClearInput }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="search"
        size={24}
        color="gray"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchKeyword}
        onChangeText={handleSearch}
      />
      {searchKeyword !== "" && (
        <TouchableOpacity
          onPress={handleClearInput}
          style={styles.clearIconContainer}
        >
          <Ionicons name="close" size={24} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
