import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { theme } from "../constants/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";

const EditPhotoScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <GestureHandlerRootView>
          <ImageZoom
            style={styles.image}
            source={{ uri: route.params.uri }}
            resizeMode="contain"
          />
        </GestureHandlerRootView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    width: "100%",
    height: "50%",
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
  },
});

export default EditPhotoScreen;
