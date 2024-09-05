import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";

const AddTagScreen = ({ route, navigation }) => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  // const existingParams = route.params ? route.params : {};
  // const updatedParams = { ...existingParams, selectedTable: tableInfo };

  const handleAddTag = () => {
    if (newTag.trim()) {
      const newTagObject = { id: Date.now().toString(), name: newTag };
      setTags((prevTags) => [...prevTags, newTagObject]);
      setNewTag(""); // Xóa giá trị ô nhập liệu
    }
  };


  const uri = route.params?.uri; // Lấy giá trị uri từ props route
  const selectedTable = route.params?.selectedTable;
//   console.log(uri, " ", selectedTable);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Thêm các thẻ"
          value={newTag}
          onChangeText={setNewTag}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTag}>
          <Text style={styles.addButtonText}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Gắn thẻ các chủ đề liên quan để tiếp cận những người quan tâm đến các
          Ghim như của bạn. Mọi người sẽ không thấy các chủ đề bạn đã gắn thẻ.
        </Text>
      </View>
      <FlatList
        data={tags}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.tagList}
      />
      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress={() =>
          navigation.navigate("CreateMediaScreen", { tags, selectedTable, uri })
        }
      >
        <Text style={styles.buttonText}>Hoàn tất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.8)",
  },
  addButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: 5,
  },
  descriptionText: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(0, 0, 0, 0.6)",
  },
  tagList: {
    width: "100%",
  },
  tag: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  tagText: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.8)",
  },
  buttonSubmit: {
    backgroundColor: "red",
    padding: 15,
    paddingHorizontal: 90,
    marginTop: 25,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: hp(2),
    // fontWeight: theme.fontWeights.medium,
  },
});

export default AddTagScreen;
