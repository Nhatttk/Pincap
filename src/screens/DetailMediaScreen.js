import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

import styles from "../assets/styles/DetailMediaStyles";
import CommentModal from "../components/DetailMedia/CommentModal";

const background =
  "https://pincap.s3.ap-southeast-1.amazonaws.com/Background/background.jpg";
const windowHeight = Dimensions.get("window").height;
const modalHeight = windowHeight * 0.9;

const DetailMediaScreen = ({ navigation, route }) => {
  // Giả sử bạn có dữ liệu Pin như sau
  const pin = route.params.item
  const [modalVisible, setModalVisible] = useState(false);
  const [scrollable, setScrollable] = useState(false);
  
  const handleModalVisible = () => {
    setModalVisible(false);
  }


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: pin.mediaURL }} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.user}>
            <View style={styles.userAvatar}>
              <Image source={{ uri: pin.mediaURL }} style={styles.avatar} />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userInfoName}>Duy tan</Text>
              <Text style={styles.userInfoFollower}>12312k follower</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.buttonFollowText}>Follow</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{pin.title}</Text>
        <Text style={styles.description}>{pin.description}</Text>

        <View style={styles.actionButton}>
          <Ionicons
            name="heart-circle"
            size={40}
            color="black"
            style={styles.feelingAction}
          />
          <TouchableOpacity
            onPress={() => {
              alert("hihi");
            }}
            style={styles.saveAction}
          >
            <Text style={styles.buttonFollowText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.comment}>
          <TouchableOpacity style={[styles.reaction]}>
            <Text style={styles.commentCount}>10 Comment</Text>
            <View style={styles.reactionCount}>
              <Text style={styles.reactionCountText}>233</Text>
              <Ionicons name="heart-outline" size={18} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setModalVisible(true);
            }}
            style={styles.listComment}
          >
            <View style={styles.bodyTop}>
              <View style={styles.user}>
                <View style={[styles.userAvatar]}>
                  <Image
                    source={{ uri: pin.image }}
                    style={[styles.avatar, styles.avatarComment]}
                  />
                </View>
                <View style={styles.userInfoComment}>
                  <View style={styles.userInfoNameComment}>
                    <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                      Duy tan
                    </Text>
                    <Text style={{ fontSize: 12, opacity: 0.8 }}>5 ngay</Text>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: pin.image }}
                      style={styles.imageComment}
                    />
                  </View>
                  <View style={styles.commentReply}>
                    <Text style={styles.userInfoFollower}>Comment</Text>
                    <View style={styles.replyComment}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 14,
                          marginRight: 5,
                        }}
                      >
                        Reply
                      </Text>
                      <Ionicons
                        name="heart-outline"
                        color={"black"}
                        size={12}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => alert(123)}
              style={styles.buttonAddComment}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Add comment
              </Text>
              <Ionicons name="attach-outline" size={22} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      <CommentModal
        pin={pin}
        visible={modalVisible}
        onClose={handleModalVisible}
      />
      {/* Nút back */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailMediaScreen;


