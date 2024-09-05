import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Pressable, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import { ScrollView } from "react-native";
import ImageGrid from "../../components/imageGrid";
import { apiCall } from "../../api";
import { AntDesign } from "@expo/vector-icons";
import Categories from "../../components/categories";
const SearchView = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  };
  console.log('activeCategory: ', activeCategory)
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (params = { page: 1 }, append = true) => {
    let res = await apiCall(params);
    console.log("got result: ");
    // console.log("got result: ", res?.data?.data.hits[0]);
    if (res?.success && res?.data?.data.hits) {
      if (append) setImages([...images, ...res?.data?.data.hits]);
      else setImages([...res?.data?.data.hits]);
    }
    // console.log("imagey: ",images);
    console.log("image.lenght: ", images.length);
  };

  return (
    <View style={[styles.container, { paddingTop }]}>
      {/* Header */}
      <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <TextInput
          placeholder="Search for images..."
          value={search}
          ref={searchInputRef}
          onChangeText={(value) => setSearch(value)}
          style={styles.searchInput}
        ></TextInput>
        {search && (
          <Pressable style={styles.closeIcon}>
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
        )}
      </View>
      <View style={styles.categories}>
        <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory}/>
        {/* <Categories/> */}
      </View>

      <ScrollView contentContainerStyle={{ gap: 15 }}>
        {/* image masonry grid */}
        <View>{<ImageGrid images={images} />}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  categories: {
    marginBottom: 10
  },
  searchBar: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.colors.grayBG,
    padding: 7,
    marginBottom: 15,
  },
  searchIcon: {
    padding: 7,
  },
  searchInput: {
    flex: 1,
    fontSize: hp(1.8),
  },
  startButton: {
    marginBottom: 15,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 35,
    borderCurve: "continuous",
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(2),
    fontWeight: theme.frontWeights.medium,
    // letterSpacing: 1,
  },
  bottomTab: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default SearchView;
