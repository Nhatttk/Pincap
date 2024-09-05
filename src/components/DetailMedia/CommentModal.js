import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  PanResponder,
  Dimensions,
  Image,
} from "react-native";
import { Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../assets/styles/DetailMediaStyles";

const windowHeight = Dimensions.get("window").height;
const modalHeight = windowHeight * 0.9;
const background =
  "https://pincap.s3.ap-southeast-1.amazonaws.com/Background/background.jpg";

const CommentModal = ({ pin, visible, onClose }) => {
  const [scrollable, setScrollable] = useState(false);
  const panY = useState(new Animated.Value(0))[0];
  const scrollViewRef = useRef(null);


  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        if (!scrollable && gestureState.dy > 0) {
          return true;
        }
        return false;
      },
      onPanResponderMove: (e, gestureState) => {
        // Kiểm tra nếu đang kéo xuống và không ở đầu của danh sách
        if (gestureState.dy > 0) {
          // Cập nhật giá trị panY          
          Animated.event([null, { dy: panY }], {
            useNativeDriver: false,
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 200) {
          Animated.timing(panY, {
            toValue: modalHeight,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            console.log(1234);
            onClose();
            panY.setValue(0);
          });
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  )[0];

  const animatedStyles = {
    transform: [{ translateY: panY }],
    height: modalHeight,
  };

  // Tạo state để xác định vị trí scroll
  const [scrollPosition, setScrollPosition] = useState({
    y: new Animated.Value(0),
    atTop: true,
    atBottom: false,
  });

  // Hàm xử lý sự kiện scroll
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollPosition.y } } }],
    { useNativeDriver: false }
  );

  // Kiểm tra xem bạn có ở đầu hoặc cuối của phần scroll không
  const handleScrollEvent = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const atTop = contentOffset.y <= 0;
    const atBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;
    setScrollPosition({ ...scrollPosition, atTop, atBottom });
    setScrollable(!(atTop || atBottom));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContainer]}>
          <Animated.View
            style={[styles.user, styles.modalContent, animatedStyles]}
            {...panResponder.panHandlers}
          >
            <View style={[styles.comment, styles.modalListComment]}>
              <TouchableOpacity style={styles.reaction}>
                <Text style={styles.commentCount}>10 Comment</Text>
                <View style={styles.reactionCount}>
                  <Text style={styles.reactionCountText}>233</Text>
                  <Ionicons name="heart-outline" size={18} />
                </View>
              </TouchableOpacity>
              <View style={styles.separator} />
              <Animated.ScrollView
                scrollEventThrottle={60}
                onScroll={handleScroll}
                onScrollEndDrag={handleScrollEvent}
                onMomentumScrollEnd={handleScrollEvent}
              >
                {[...Array(7)].map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={1}
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
                            <Text
                              style={{ fontWeight: "bold", marginRight: 5 }}
                            >
                              Duy tan
                            </Text>
                            <Text style={{ fontSize: 12, opacity: 0.8 }}>
                              5 ngay
                            </Text>
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
                  </TouchableOpacity>
                ))}
              </Animated.ScrollView>
              <TouchableOpacity
                onPress={() => alert(123)}
                style={styles.buttonAddComment}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Add comment
                </Text>
                <Ionicons name="attach-outline" size={22} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal;
