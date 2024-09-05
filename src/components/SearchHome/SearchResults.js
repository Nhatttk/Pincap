import React from "react";
import { View, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../assets/styles/SearchStyles";

const SearchResults = ({ searchResults }) => {
  return (
    <FlatList
      data={searchResults}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemSearchResult}>
          <Ionicons
            name="search"
            size={24}
            color="gray"
            style={styles.searchIcon}
          />
          <Text style={styles.item}>{item.tagName}</Text>
        </View>
      )}
    />
  );
};

export default SearchResults;
