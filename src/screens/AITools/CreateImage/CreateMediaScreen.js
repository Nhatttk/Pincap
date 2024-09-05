import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { addMedia } from "../../../api/Media/AddMedia";
import { launchImageLibraryAsync } from "expo-image-picker";
// import { launchImageLibraryAsync } from 'react-native-image';
const CreateMediaScreen = ({ route, navigation }) => {
  const BottomSheetModalRef = useRef(null);
  const [isBackPressed, setIsBackPressed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const myProfile = useSelector((state) => state.myProfile.myProfileUser);
  const snapPoints = ["25%"];
  const { uri, selectedTable, tags } = route.params; // Lấy thông tin về bảng đã chọn và link ảnh
  const formData = new FormData();

  console.log("uri: " , uri);

  const option = {
    title: "Select Image",
    type: "library",
    options: {
      maxHeight: 200,
      maxWidth: 200,
      SelectionLimit: 0,
      mediaType: "photo",
      includeBase64: false,
    },
  };

  useEffect(() => {
    open();
  }, []);

  const [assets, setAssets] = useState(null);
  const open = async () => {
    console.log(123);
    const response = await launchImageLibraryAsync(option);
    console.error(response.assets[0]);
    setAssets(response.assets[0]);

  };
  // console.log("uri: ",uri.assets[0]);
  const handlePresentModal = () => {
    setIsModalOpen(true);
    BottomSheetModalRef.current?.present();
  };

  const handleDismissModal = () => {
    BottomSheetModalRef.current?.dismiss();
    setIsModalOpen(false);
    setIsBackPressed(false);
  };

  useFocusEffect(
    useCallback(() => {
      const onBeforeRemove = (event) => {
        if (isBackPressed) return;

        event.preventDefault();
        setIsBackPressed(true);
        handlePresentModal();
      };

      navigation.addListener("beforeRemove", onBeforeRemove);

      return () => {
        navigation.removeListener("beforeRemove", onBeforeRemove);
      };
    }, [isBackPressed])
  );

  const [formMedia, setFormMedia] = useState({
    medias: "",
    mediaName: "",
    description: "",
    type: 0,
    mediaOwner_id: myProfile ? myProfile.id : "",
    tagName: tags ? tags.map((tag) => tag.name).join(", ") : "",
    album_id: selectedTable ? selectedTable.id : "",
  });

  const handleInputChange = (name, value) => {
    setFormMedia({
      ...formMedia,
      [name]: value,
    });
  };

  const handleAddMedia = async () => {
    try {
      //  const response = await launchImageLibraryAsync(option);
      //  console.error(response.assets[0]);
      //  console.log(2);

      formData.append("medias", {
        uri: assets.uri,
        type: assets.type,
        name: assets.fileName,
      });
      formData.append("mediaName", formMedia.formMedia);
      formData.append("description", formMedia.description);
      formData.append("type", formMedia.type);
      formData.append("mediaOwner_id", formMedia.mediaOwner_id);
      formData.append("tagName", formMedia.tagName);
      formData.append("album_id", formMedia.album_id);

      const res = await addMedia(formData);
      console.log("res" ,res);
      alert("Đăng ảnh thành công! ")
      navigation.navigate("Home");
    } catch (error) {
      console.error("lỗi addmedia: ",error);
    }
  };
  return (
    <BottomSheetModalProvider>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={[styles.container, { paddingTop }]}>
            {isModalOpen && <View style={styles.overlay} />}
            <View style={styles.header}>
              <View style={styles.imageContainer}>
                <GestureHandlerRootView>
                  <ImageZoom
                    style={[styles.image]}
                    source={{ uri }}
                    resizeMode="contain"
                  />
                </GestureHandlerRootView>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() =>
                    navigation.navigate("EditPhoto", {
                      uri,
                    })
                  }
                >
                  <Icon name="edit" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>Tiêu đề</Text>
              <TextInput
                style={styles.input}
                placeholder="Cho mọi người biết Ghim của bạn giới thiệu điều gì"
                onChangeText={(text) => handleInputChange("mediaName", text)}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>Mô tả</Text>
              <TextInput
                style={styles.input}
                placeholder="Thêm mô tả, đề cập hoặc hashtag vào Ghim của bạn."
                onChangeText={(text) => handleInputChange("description", text)}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>Liên kết</Text>
              <TextInput
                style={styles.input}
                placeholder="Thêm liên kết của bạn ở đây"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChooseAlbum", { uri })}
            >
              <View style={styles.linkView}>
                <View style={styles.linkView1}>
                  <Text>
                    Chọn một bảng{" "}
                    {selectedTable ? `(${selectedTable.albumName})` : ""}
                  </Text>
                </View>
                <Entypo name="chevron-right" style={{ fontSize: 22 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AddTag", { uri, selectedTable })
              }
            >
              <View style={styles.linkView}>
                <View style={styles.linkView1}>
                  <Text>
                    Gắn thẻ chủ đề liên quan{" "}
                    {tags ? `(${tags.map((tag) => tag.name).join(", ")})` : ""}
                  </Text>
                </View>
                <Entypo name="chevron-right" style={{ fontSize: 22 }} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("AdvancedSettings")}
            >
              <View style={styles.linkView}>
                <View style={styles.linkView1}>
                  <Text>Cài đặt nâng cao</Text>
                </View>
                <Entypo name="chevron-right" style={{ fontSize: 22 }} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.iconButtonContainer}>
            <Icon name="folder" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButtonContainer}>
            <Icon name="download" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createButton}
            onPress={
              (() => handleAddMedia())
            }
          >
            <Text style={styles.createButtonText}>Tạo</Text>
          </TouchableOpacity>
        </View>

        <BottomSheetModal
          ref={BottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={handleDismissModal}
        >
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetTitle}>Lưu bản nháp?</Text>
            <Text style={styles.bottomSheetDescription}>
              Nếu không lưu bây giờ, bạn sẽ mất tất cả thay đổi.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.grayButton]}
                onPress={handleDismissModal}
              >
                <Text style={styles.grayButtonText}>Xóa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.redButton]}
                onPress={() => {
                  // Xử lý hành động lưu bản nháp ở đây
                  navigation.goBack();
                }}
              >
                <Text style={styles.redButtonText}>Lưu bản nháp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetModal>
      </KeyboardAvoidingView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  header: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
    borderRadius: 7,
  },
  content: {
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "left",
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    height: 50,
  },
  linkView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 14,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  linkView1: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
  },
  iconButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  bottomSheetContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bottomSheetDescription: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // Increased border radius
    alignItems: "center",
    marginHorizontal: 5,
  },
  grayButton: {
    backgroundColor: "#ccc",
  },
  grayButtonText: {
    color: "#000",
    fontSize: 16,
  },
  redButton: {
    backgroundColor: "red",
  },
  redButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  iconButtonContainer: {
    backgroundColor: "lightgray",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  createButton: {
    backgroundColor: "red",
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  createButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreateMediaScreen;
