import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { styles } from "../assets/styles/ProfileStyles";
import SettingSheet from "../components/ProfileScreen/SettingSheet";
import BottomSheet from "../components/ProfileScreen/BottomSheet";
import { getMyProfile } from "../api/Profile/MyProfile";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../redux/UserRedux/MyProfile";
import Follow from "../components/ProfileScreen/Follow";
import FollowSheet from "../components/ProfileScreen/FollowSheet";
import { getAllFollow } from "../api/Profile/GetAllFollow";

import { getAllListMedia } from "../api/Media/GetAllListMedia";
import ImageGrid from "../components/imageGrid";
import ChooseSettingSheet from "../components/ProfileScreen/ChooseSettingSheet";

const URL =
  "https://pincap.s3.ap-southeast-1.amazonaws.com/Avatar/avatar-default.jpg";
const background =
  "https://pincap.s3.ap-southeast-1.amazonaws.com/Background/background.jpg";

function MyProfileScreen() {
  const [dataUserFollow, setDataUserFollow] = useState([]);
  const [showFullModalSheet, setShowFullModalSheet] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Media");
  const [listMediaAlbum, setListMediaAlbum] = useState([]);

  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.myProfile.myProfileUser);
  const token = useSelector((state) => state.auth?.tokenProfile);
  const handleShowFullModalSheet = () => {
    setShowFullModalSheet(!showFullModalSheet);
  };

  const handleSettingsPress = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  const handleFilterButtonClick = (buttonType) => {
    handleGetListMediaOrAlbum(buttonType);
    setSelectedButton(buttonType);
  };

  useEffect(() => {
    fetchData();
  }, [token]);
  const fetchData = async () => {
    getMyProfile()
      .then((data) => {
        dispatch(setUserProfile(data.userDetail));
        console.log(myProfile.id);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  };
  const getAllFollowUser = async (relationship) => {
    getAllFollow(relationship)
      .then((data) => {
        // console.log(123123);
        // console.log(data.myListRelationship);
        setDataUserFollow([data.myListRelationship, relationship]);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  };

  const handlerFollow = (relationship) => {
    getAllFollowUser(relationship);

    handleShowFullModalSheet();
  };

  useEffect(() => {
    handleGetListMediaOrAlbum("Media");
  }, []);

  const handleGetListMediaOrAlbum = (MediaAlbum) => {
    if (MediaAlbum === "Media") {
      getAllListMedia()
        .then((data) => {
          setListMediaAlbum(data.myListMedia);
        })
        .catch((error) => {
          console.error("Error fetching tags:", error);
        });
    } else if (MediaAlbum === "Album") {
      setListMediaAlbum([]);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image
          source={{ uri: myProfile.background }}
          style={styles.background}
        />
        <Image source={{ uri: myProfile.avatar }} style={styles.avatar} />
        <Text style={styles.title}>
          {myProfile.firstName + " " + myProfile.lastName}
        </Text>

        <Follow
          onHandlerFollow={handlerFollow}
          countFollower={myProfile.countFollowees}
          countFollowee={myProfile.countFollowers}
        />

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
        {listMediaAlbum && <ImageGrid images={listMediaAlbum.data} />}
      </View>
      <TouchableOpacity style={styles.setting} onPress={handleSettingsPress}>
        <Ionicons name="settings-outline" size={24} color="#000" />
      </TouchableOpacity>
      {showSettingsModal && (
        <ChooseSettingSheet
          visible={showSettingsModal}
          onClose={handleSettingsPress}
        />
      )}
      {showMenu && <BottomSheet visible={showMenu} onClose={handleMenuPress} />}
      {showFullModalSheet && (
        <FollowSheet
          dataFollow={dataUserFollow[0]}
          actionFollow={dataUserFollow[1]}
          visible={showFullModalSheet}
          onClose={handleShowFullModalSheet}
        />
      )}
    </ScrollView>
  );
}

export default MyProfileScreen;