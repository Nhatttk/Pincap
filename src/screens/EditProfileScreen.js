import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

function EditProfileScreen() {
  const fakeNotifications = [
    {
      id: 1,
      title: "Thông báo 1",
      content: "Đây là thông báo 1",
      senderId: {
        id: "1",
        name: "Custom data for notification 1",
      },
      receiverId: {
        id: "2",
        name: "Custom data for notification 1",
      },
    },
    {
      id: 2,
      title: "Thông báo 2",
      content: "Đây là thông báo 2",
      senderId: {
        id: "1",
        name: "Custom data for notification 2",
      },
      receiverId: {
        id: "2",
        name: "Custom data for notification 2",
      },
    },
    {
      id: 3,
      title: "Thông báo 3",
      content: "Đây là thông báo 3",
      senderId: {
        id: "2",
        name: "Custom data for notification 3",
      },
      receiverId: {
        id: "1",
        name: "Custom data for notification 3",
      },
    },
    // Thêm dữ liệu giả mạo khác nếu cần
  ];
  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      <Text style={styles.title}>Danh sách thông báo</Text>
      <FlatList
        data={fakeNotifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.notificationTitle}>{item.title}></Text>
            <Text style={styles.notificationBody}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notification: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  notificationText: {
    fontSize: 16,
  },
});
