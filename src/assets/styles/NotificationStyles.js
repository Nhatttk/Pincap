import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center", // Chỉnh justify content để các phần tử nằm giữa
    marginBottom: 10,
    marginTop: 50,
  },
  headerButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 5, // Tạo khoảng cách giữa các nút
    marginRight: 5, // Tạo khoảng cách giữa các nút
    width: "50%",
  },
  selectedHeaderButton: {
    backgroundColor: "#000000",
  },
  selectedHeaderText: {
    color: "white",
  },
  headerButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  markAllAsRead: {
    borderRadius: 20, // Bo tròn góc
    paddingHorizontal: 10, // Khoảng cách giữa biểu tượng và văn bản
    paddingVertical: 5, // Khoảng cách dọc
    borderWidth: 1,
    flexDirection: "row", // Sắp xếp theo hàng ngang
    alignItems: "center",
    backgroundColor: "#9b9cff",
    position: "absolute", // Đặt vị trí tuyệt đối
    top: 30, // Dịch lên từ phía trên
    right: 20, // Dịch sang bên phải
  },
  notification: {
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 100,
  },
  userInfo: {
    flexDirection: "column",
    margin: 5,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  body: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    marginLeft: 13,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginVertical: 10,
  },
  notificationContent: {
    fontSize: 16,
  },
  readNotification: {
    backgroundColor: "#f0f0f0", // Màu nền khác cho thông báo đã đọc
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#9b9cff", // Màu biểu tượng chấm xanh
    marginLeft: "auto", // Căn sang phải
  },
});
