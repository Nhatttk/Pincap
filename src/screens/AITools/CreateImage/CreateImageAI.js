import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { createAIImage } from "../../../api/AiTools/CreateAiImage";
import OptionsImageAI from "./OptionsImageAI";
import { shareAsync } from "expo-sharing";
import * as FileSystem from "expo-file-system";

const CreateImageAI = () => {
  const [inputText, setInputText] = useState("");
  const [textRequest, setTextRequest] = useState({
    textInput: "",
    timeCurrent: "",
  });
  const [isPressed, setIsPressed] = useState(false);
  const [urlResponseImage, setUrlResponseImage] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [isDownloadImage, setIsDownloadImage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [options, setOptions] = useState({
    height: 512,
    width: 512,
    style_preset: "photographic",
  });
  const [formRequest, setFormRequest] = useState({
    prompt: "",
    ...options,
  });

  useEffect(() => {
    setFormRequest({
      ...formRequest,
      prompt: inputText,
      ...options,
    });
  }, [options, inputText]);

  const onClose = () => {
    setModalVisible(false);
  };
  const onCreateAiImage = async () => {
    try {
      if (inputText) {
        setIsLoad(true);
        dismissKeyboard();
        const currentDateTime = new Date().toLocaleString();

        setTextRequest({
          textInput: inputText,
          timeCurrent: currentDateTime,
        });

        console.log(formRequest);
        var res = await createAIImage(formRequest);

        if (res) {
          setUrlResponseImage(res?.imageUrl);
          setIsLoad(false);
        }
      }
    } catch (error) {
      console.error("Có lỗi xảy ra trong quá trình tạo ảnh. ", error);
    }
  };

  const onDownloadImage = async () => {
    try {
      setIsDownloadImage(true);
      const fileName = "Image.png";
      const result = await FileSystem.downloadAsync(
        urlResponseImage,
        FileSystem.documentDirectory + fileName
      );

      if (result) {
        setIsDownloadImage(false);
        save(result.uri);
      }
    } catch (error) {
      console.error("Lỗi khi tải xuống ảnh:", error);
    }
  };

  const save = async (uri) => {
    shareAsync(uri);
  };
  const clearTextInput = () => {
    setInputText("");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.textContainer}></View>
        <View style={styles.createImageContainer}>
          <Text style={styles.textDateTime}>{textRequest?.timeCurrent}</Text>
          <Text style={styles.textQuestion}>{textRequest?.textInput}</Text>
          <Animated.View entering={FadeInUp.delay(600).springify()}>
            <TouchableOpacity style={styles.aiImageGenerate}>
              {!isLoad ? (
                !isDownloadImage ? (
                  <Image
                    style={styles.aiImage}
                    source={
                      urlResponseImage
                        ? { uri: urlResponseImage }
                        : require("../../../assets/ai_preview.jpeg")
                    }
                    transition={100}
                  />
                ) : (
                  <View style={[styles.aiImage, styles.loadDownload]}>
                    <ActivityIndicator size="large" color="#ccc" />
                  </View>
                )
              ) : (
                <View style={{ flexDirection: "row", gap: 7 }}>
                  <ActivityIndicator size="small" color="#ccc" />
                  <Text style={[styles.loadRequestText]}>Đang gửi...</Text>
                </View>
              )}
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).springify()}
            style={styles.inputTextContainer}
          >
            <TextInput
              style={styles.inputText}
              multiline={true}
              placeholder="Nhập một mô tả gì đó..."
              placeholderTextColor="#fff"
              textAlignVertical="top"
              value={inputText}
              onChangeText={setInputText}
              autoCorrect={false}
              autoCapitalize="none"
            />
            {inputText.length > 0 && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={clearTextInput}
              >
                <Ionicons name="close" color={"black"} size={16} />
              </TouchableOpacity>
            )}
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).springify()}
            style={[styles.optionsCreate]}
          >
            <View style={styles.leftButtons}>
              <Pressable
                onPress={() => setModalVisible(true)}
                style={({ pressed }) => [
                  styles.optionsButton,
                  {
                    transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                  },
                ]}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
              >
                <Ionicons name="options" color={"white"} size={24} />
              </Pressable>
              {urlResponseImage && (
                <Animated.View entering={FadeInDown.delay(600).springify()}>
                  <Pressable
                    onPress={onDownloadImage}
                    style={({ pressed }) => [
                      styles.optionsButton,
                      {
                        transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                      },
                    ]}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                  >
                    <Ionicons name="download" color={"white"} size={24} />
                  </Pressable>
                </Animated.View>
              )}
            </View>
            <Pressable
              onPress={onCreateAiImage}
              style={({ pressed }) => [
                styles.createButton,
                {
                  transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                },
              ]}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <Text style={styles.createImage}>Tạo</Text>
            </Pressable>
          </Animated.View>
        </View>

        {/* Modal */}
        <OptionsImageAI
          isVisible={modalVisible}
          onClose={onClose}
          setOptions={setOptions}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#1d1c21",
  },
  createImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textContainer: {
    display: "flex",
    flex: 1,
    marginStart: 20,
    marginBottom: 200,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textDateTime: {
    color: "#ccc",
    fontSize: 8,
  },
  textQuestion: {
    color: "#fff",
    fontSize: 13,
    marginVertical: 10,
  },
  aiImageGenerate: {
    width: "100%",
  },
  aiImage: {
    width: "90%",
    borderRadius: 15,
    height: undefined,
    aspectRatio: 1,
  },
  loadDownload: {
    justifyContent: "center"
  },
  loadRequestText: {
    color: "white",
  },
  inputTextContainer: {
    position: "relative",
    minWidth: "90%",
    backgroundColor: "#313038",
    borderColor: "#ccc",
    borderRadius: 15,
    marginVertical: 20,
    minHeight: 120,
  },
  inputText: {
    flex: 1,
    padding: 15,
    marginRight: 1,
    fontSize: 12,
    borderRadius: 10,
    height: "100%",
    color: "#fff",
  },
  clearButton: {
    backgroundColor: "#ccc",
    borderRadius: 100,
    position: "absolute",
    padding: 1,
    top: 12,
    right: 12,
  },
  optionsCreate: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
    color: "white",
    marginBottom: 30,
  },
  leftButtons: {
    flexDirection: "row",
    gap: 20,
  },
  optionsButton: {
    padding: 10,
    borderColor: "#ccc",
    borderRadius: 10,
    borderWidth: 1,
  },
  createButton: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    paddingHorizontal: 30,
    color: "black",
  },
  createImage: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default CreateImageAI;
