

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { getImageSize } from "../helpers/common";
import { theme } from "../constants/theme";
import { wp } from "./../helpers/common";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { reactionMedia } from "../api/ReactionMedia/reactionMedia";

const ImageCard = ({ item, index, columns }) => {
  const navigation = useNavigation();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const myProfile = useSelector((state) => state.myProfile?.myProfileUser);
  useEffect(() => {
    Image.getSize(
      item?.mediaURL,
      (width, height) => {
        setWidth(width);
        setHeight(height);
      },
      (error) => {
        console.log("Error getting image size:", error);
      }
    );

    // Kiểm tra xem myProfile.id có trong item?.reaction_user không
    
  });

  const getImageHeight = () => {
    return { height: getImageSize(height, width) };
  };

  const isLastInRow = () => {
    return (index + 1) % columns === 0;
  };

  const handleReactionMedia = async (media_id) => {
    try {
      await reactionMedia(media_id);
      setIsLiked(!isLiked);
      alert("Tym thành công");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <Pressable style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailMediaScreen", { item: item })}
      >
        <Image
          style={[styles.image, getImageHeight()]}
          source={{ uri: item?.mediaURL }}
          transition={100}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleReactionMedia(item.id)}>
        <View style={styles.iconWrapper}>
          <AntDesign
            name="hearto"
            size={20}
            color={isLiked ? "red" : "black"}
          />
        </View>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "auto",
  },
  iconWrapper: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    backgroundColor: theme.colors.grayBG,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
    overflow: "hidden",
    marginBottom: wp(2),
  },
  spacing: {
    marginRight: wp(2),
  },
});

export default ImageCard;
