import React, { useEffect, useState } from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import SearchBar from "../components/SearchHome/SearchBar";
import SearchResults from "../components/SearchHome/SearchResults";
import CardList from "../components/SearchHome/CardList";
import styles from "../assets/styles/SearchStyles";
import { getAllTags } from "../api/Search/tag";
import { useDispatch, useSelector } from "react-redux";
import { deleteTags, setTags } from "../redux/TagRedux/Tags";

export default function SearchScreen() {
  // const [tags, setTags] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.tagsList);
  useEffect(() => {
    const fetchData = async () => {
      getAllTags()
        .then((data) => {
          dispatch(setTags(data.listTag));
        })
        .catch((error) => {
          console.error("Error fetching tags:", error);
        });
    };
    fetchData();
  }, []);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    if (keyword.length > 0) {
      const filteredResults = tags.filter((item) =>
        item.tagName.toLowerCase().includes(keyword.toLowerCase())
      );
      setSearchResults(filteredResults);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleClearInput = () => {
    setSearchKeyword("");
    setSearchResults([]);
    setShowSearchResults(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SearchBar
        searchKeyword={searchKeyword}
        handleSearch={handleSearch}
        handleClearInput={handleClearInput}
      />
      <View showsVerticalScrollIndicator={false}>
        {showSearchResults ? (
          <SearchResults searchResults={searchResults} />
        ) : (
          <CardList data={tags} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
