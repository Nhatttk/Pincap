import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;
const modalHeight = windowHeight * 0.9;

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    flex: 9,
    resizeMode: "cover",
    marginBottom: 20,
    height: 650,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "left",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: "blue",
  },

  body: {
    marginVertical: 0,
    marginHorizontal: "5%",
    flex: 1,
  },

  bodyTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3%",
  },

  user: {
    display: "flex",
    flexDirection: "row",
  },

  userAvatar: {
    // height: !1000
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  userInfo: {
    marginTop: 3,
    marginHorizontal: "10%",
  },

  userInfoName: {
    fontWeight: "bold",
    fontSize: 18,
  },

  commentReply:{
    marginTop: 105
  },

  userInfoFollower: {
    fontSize: 15,
  },

  buttonFollow: {
    borderRadius: 50,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: 90, // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 40,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonFollowText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 3,
  },

  actionButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "gray",
    borderBottomWidth: 1,
    height: "15%",
  },

  saveAction: {
    borderRadius: 50,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: 90, // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 40,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  feelingAction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  comment: {
    display: "flex",
    flexDirection: "column",
    marginVertical: "3%",
    // flex: 1,
    height: "100%",
    width: "100%",
  },

  modalListComment: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    position: "relative",
  },

  reaction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc", // Màu của gạch ngang
    marginVertical: 10, // Khoảng cách với các phần khác
  },

  commentCount: {
    fontWeight: "bold",
    fontSize: 16,
  },

  reactionCount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reactionCountText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  listComment: {
    display: "flex",
    flexDirection: "column",
    marginVertical: "3%",
  },

  avatarComment: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  userComment: {},

  userInfoComment: {
    display: "flex",
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 140
  },

  userInfoNameComment: {
    fontWeight: "bold",
    fontSize: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  imageContainer: {
    flex: 1, // Sử dụng flex để container mở rộng ra toàn bộ phần còn lại của parent
    marginRight: 10, // Khoảng cách giữa ảnh và nội dung comment
    height: 50
  },
  imageComment: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    // borderRadius: 10, // Bo góc ảnh để tránh góc sắc
  },

  replyComment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  buttonAddComment: {
    fontSize: 20,
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 50,
    borderColor: "gray",
    height: 30,
    width: "100%",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },


  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: "auto", // Đảm bảo modal nằm ở phía dưới
    height: modalHeight,
  },
});
