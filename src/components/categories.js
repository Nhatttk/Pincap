import { FlatList } from "react-native";
import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { data } from "../constants/data";
import { hp, wp } from "./../helpers/common";
import { theme } from "./../constants/theme";

// const Categories = () => {
const Categories = ({ activeCategory, handleChangeCategory }) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatlistContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem
          isActive={activeCategory == item}
          handleChangeCategory={handleChangeCategory}
          title={item}
          index={index}
        />
      )}
    />
  );
};

const CategoryItem = ({ title, index, isActive, handleChangeCategory }) => {
  let color = isActive? theme.colors.white: theme.colors.neutral(0.8);
  let backgroundColor = isActive ? theme.colors.neutral(0.8): theme.colors.white;
    return (
      <View>
        <Pressable
          onPress={() => handleChangeCategory(isActive ? null : title)}
          style={[styles.category, { backgroundColor }]}
        >
          <Text style={[styles.title, { color }]}>{title}</Text>
        </Pressable>
      </View>
    );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
  category: {
    padding: 12,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.frontWeights.medium,
  },
});

export default Categories;
