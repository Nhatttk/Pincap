import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "25%",
    alignItems: "center",
    justifyContent: "center",
  },

  containerHeader:{
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  

  background: {
    position: "absolute",
    width: "100%",
    height: "40%",
    top: 0,
    resizeMode: "cover",
    opacity: 0.8, // Điều chỉnh độ mờ của background
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },

  subtitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  follow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textFollow: {
    fontSize: 16,
    fontWeight: "bold",
  },

  avatar: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "#fff",
  },

  buttonFollow: {
    borderRadius: 100,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: "80%", // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 50,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonCancelFollow: {
    borderRadius: 100,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: "80%", // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 50,
    backgroundColor: "gray",
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

  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },

  menuButton: {
    marginVertical: 30,
  },

  setting: {
    position: "absolute",
    top: 20,
    right: 0,
    marginTop: 20, // Khoảng cách từ lề trên của màn hình
    marginRight: 20, // Khoảng cách từ lề phải của màn hình
  },

  titleSheet: {
    opacity: 0.5,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  bottomSheetItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  bottomSheetItemText: {
    marginLeft: 10,
  },

  confirmationModal: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  confirmationContent: {
    width: "100%",
    alignItems: "center",
  },
  confirmationTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  confirmationMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  confirmationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  confirmButton: {
    borderRadius: 100,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: 120, // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 50,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  cancelButton: {
    borderRadius: 100,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: 120, // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 50,
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#fff",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center", // Chỉnh justify content để các phần tử nằm giữa
    marginVertical: 20,
  },
  headerButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 5, // Tạo khoảng cách giữa các nút
    marginRight: 5, // Tạo khoảng cách giữa các nút
    width: 90,
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

  modalSettingSheet: {
    height: windowHeight,
  },

  settingTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  closeButton: {},

  settingTitleText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: "10%",
  },

  buttonSettingSave: {
    borderRadius: 100,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: "20%", // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 30,
    backgroundColor: "red",
    color: "white",
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  settingContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  settingBackground: {
    position: "absolute",
    width: "100%",
    height: "50%",
    top: 0,
    resizeMode: "cover",
    opacity: 0.8, // Điều chỉnh độ mờ của background
  },

  settingEditImage: {
    borderRadius: 100,
    overflow: "hidden", // Đảm bảo nút không vượt ra khỏi khu vực được bo tròn
    width: 150, // Điều chỉnh chiều rộng của container nút theo nhu cầu
    height: 40,
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  formContainer: {
    height: "100%",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    color: "black",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },

  formInput: {
    marginVertical: 5,
    display: "flex",
    height: 65,
    justifyContent: "space-between",
  },

  containerChangePassword:{
    alignItems: "center",
    justifyContent: "center",
  },

  changePasswordButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },

  changePasswordButtonText: {
    color: "#fff",
  },

  scrollView: {
    flex: 1,
  },

  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 150,
  },



  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, // Thêm padding cho khoảng cách giữa các phần tử
    marginVertical: 20, // Thêm margin cho khoảng cách giữa các dòng
  },
  followInfo: {
    flexDirection: 'row',
    alignItems: 'center', 
  },

  followAvatar:{
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  followName : {
    marginHorizontal: 10, 
  },

  followNameText:{
    fontSize: 18,
    fontWeight: 'bold'
  },

  followAction: {
    flexDirection: 'row', // Đảm bảo button và icon nằm cùng một hàng
    alignItems: 'center',
    marginLeft: 10,
  },

  actionButton:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: "25%",
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row', // Sắp xếp nội dung theo hàng ngang
    marginRight: 5, // 
  },

  actionButtonFollow: {
    backgroundColor: "red",
  },

  actionButtonCanel:{
    backgroundColor: "#b9aeae",
  },

  actionText: {
    marginRight: 5,
  },
});
