import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
// import { getAllListAlbum } from "../api/Album/GetAllListAlbum";
import { useEffect, useState } from "react";
import { getAllListAlbum } from './../api/Album_Tag/GetAllListAlbum';

const ChooseAlbumScreen = ({ route }) => {
  // Nhận route từ props
  const navigation = useNavigation();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchListMedia();
  }, []);

  const fetchListMedia = async (append = false) => {
    await getAllListAlbum()
      .then((data) => {
        if (append) {
          setAlbums((prevAlbums) => [
            ...prevAlbums,
            ...data.myListAlbums.albums,
          ]);
        } else {
          setAlbums([...data.myListAlbums.albums]);
        }
      })
      .catch((error) => {
        console.error("Error fetching albums: ", error);
      });
  };

//   console.log("data-albums: ", albums);

  const tables = albums;

  const handleTablePress = (tableInfo) => {
    const existingParams = route.params ? route.params : {};
    const updatedParams = { ...existingParams, selectedTable: tableInfo };
    navigation.navigate("CreateMediaScreen", updatedParams);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#666" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Tìm kiếm" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Bảng của bạn</Text>
      </View>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            
          <TouchableOpacity onPress={() => handleTablePress(item)}>
            <View style={styles.table}>
              <Image
                style={styles.imageTable}
                source={{ uri: item.imageCover }}
                resizeMode="contain"
              />
              <Text style={styles.textTable}>{item.albumName}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listTable}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.createButton}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.createButtonText}>Tạo bảng</Text>
      </View>
    </View>
  );
};

export default ChooseAlbumScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
  textInput: {
    height: 40,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: 10,
    height: 50,
    borderRadius: 25,
    margin: 5,
    backgroundColor: "rgba(170, 170, 170, 0.3)",
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  content: {
    margin: 5,
    height: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listTable: {
    paddingHorizontal: 10,
  },
  table: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageTable: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 15,
  },
  textTable: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0000",
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 10,
  },
  createButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
