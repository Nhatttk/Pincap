import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { styles } from "../assets/styles/ProfileStyles";
import SettingSheet from "../components/ProfileScreen/SettingSheet";
import BottomSheet from "../components/ProfileScreen/BottomSheet";
import { getMyProfile } from "../api/Profile/MyProfile";
import { getOtherProfileUser } from "../api/Profile/OtherProfileUser";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../redux/UserRedux/MyProfile";
import Follow from "../components/ProfileScreen/Follow";

const URL =
  "https://pincap.s3.ap-southeast-1.amazonaws.com/Avatar/avatar-default.jpg";
const background =
  "https://pincap.s3.ap-southeast-1.amazonaws.com/Background/background.jpg";

function ProfileScreen() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [clickFollow, setClickFollow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Media");
  const [myProfile, setMyProfile] = useState({});
  const dispatch = useDispatch();
  const myProfileUser = useSelector((state) => state.myProfile.myProfileUser);

  const handleSettingsPress = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  const handleFollowPress = () => {
    setClickFollow(!clickFollow);
  };

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  const handleFilterButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  useEffect(() => {
    const fetchData = async () => {
      getOtherProfileUser("9bd244a0-c3f8-4732-9710-c3a96f44d30c")
        .then((data) => {
          setMyProfile(data.userDetail);
          followees = myProfile.followers;
          setClickFollow(followees.some((item) => {
            return item.id === myProfileUser.id;
          }));

      
        })
        .catch((error) => {
          console.error("Error fetching tags:", error);
        });
    };
    fetchData();
  }, []);
  console.log(12312213123231);
    const handlerFollow = ($relationship) => {
    alert($relationship);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: myProfile.background }} style={styles.background} />
      <Image source={{ uri: myProfile.avatar }} style={styles.avatar} />
      <Text style={styles.title}>
        {myProfile.firstName + " " + myProfile.lastName}
      </Text>
      <Follow
        onHandlerFollow={handlerFollow}
        countFollower={myProfile.countFollowers}
        countFollowee={myProfile.countFollowees}
      />
      <View style={styles.action}>
        {!clickFollow ? (
          <TouchableOpacity
            style={styles.buttonFollow}
            onPress={() => handleFollowPress()}
          >
            <Ionicons name="add" size={24} color="#fff" />
            <Text style={styles.buttonFollowText}>Follow</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonCancelFollow}
            onPress={() => handleFollowPress()}
          >
            <Ionicons name="remove" size={24} color="#fff" />
            <Text style={styles.buttonFollowText}>Following</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => handleFilterButtonClick("Media")}
          style={[
            styles.headerButton,
            selectedButton === "Media"
              ? [styles.selectedHeaderButton, styles.selectedHeaderText]
              : null,
          ]}
        >
          <Text
            style={[
              styles.headerButtonText,
              selectedButton === "Media" ? styles.selectedHeaderText : null,
            ]}
          >
            Media
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterButtonClick("Album")}
          style={[
            styles.headerButton,
            selectedButton === "Album"
              ? [styles.selectedHeaderButton, styles.selectedHeaderText]
              : null,
          ]}
        >
          <Text
            style={[
              styles.headerButtonText,
              selectedButton === "Album" ? styles.selectedHeaderText : null,
            ]}
          >
            Album
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.setting} onPress={handleSettingsPress}>
        <Ionicons name="settings-outline" size={24} color="#000" />
      </TouchableOpacity>

      {showSettingsModal && (
        <SettingSheet
          visible={showSettingsModal}
          onClose={handleSettingsPress}
        />
      )}
      {showMenu && <BottomSheet visible={showMenu} onClose={handleMenuPress} />}
    </SafeAreaView>
  );
}

export default ProfileScreen;
