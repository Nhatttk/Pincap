import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import { styles } from "../../assets/styles/ProfileStyles";
import { useDispatch, useSelector } from "react-redux";

const windowHeight = Dimensions.get("window").height;
const URL =
  "https://pincap.s3.ap-southeast-1.amazonaws.com/Avatar/avatar-default.jpg";

const FollowSheet = ({ dataFollow, actionFollow, visible, onClose }) => {
  const dispatch = useDispatch();
  const myProfileUser = useSelector((state) => state.myProfile.myProfileUser);

  console.log(myProfileUser.id);

  return (
    <SafeAreaView>
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={[styles.overlay, styles1.overlayStyles1]}>
          <View style={[styles.bottomSheet, styles1.modalSettingSheet]}>
            <View style={styles.settingTitle}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close-circle" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.settingTitleText}>Follower</Text>
            </View>
            {/* Nội dung của bottom sheet cài đặt */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContent}
              keyboardShouldPersistTaps="handled"
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataFollow?.data}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => (
                  <>
                    {actionFollow === "followees" ? (
                      <View style={styles.followContainer}>
                        <View style={styles.followInfo}>
                          <Image
                            source={{ uri: item.followees.avatar }}
                            style={styles.followAvatar}
                          />
                          <View style={styles.followName}>
                            <Text style={styles.followNameText}>
                              {item.followees.firstName +
                                " " +
                                item.followees.lastName}
                            </Text>
                            <Text>20 nguo theo doi</Text>
                          </View>
                        </View>

                        <View styles={styles.followAction}>
                          {!item.followees.followees.some((item) => {
                            return item.id === myProfileUser.id;
                          }) ? (
                            <TouchableOpacity
                              style={[
                                styles.actionButton,
                                styles.actionButtonFollow,
                              ]}
                            >
                              <Text style={styles.followNameText}>Follow</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              style={[
                                styles.actionButton,
                                styles.actionButtonCanel,
                              ]}
                            >
                              <Text style={styles.followNameText}>Cancel</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                      </View>
                    ) : (
                      <View style={styles.followContainer}>
                        <View style={styles.followInfo}>
                          <Image
                            source={{ uri: item.followers.avatar }}
                            style={styles.followAvatar}
                          />
                          <View style={styles.followName}>
                            <Text style={styles.followNameText}>
                              {item.followers.firstName +
                                " " +
                                item.followers.lastName}
                            </Text>
                            <Text>20 nguo theo doi</Text>
                          </View>
                        </View>

                        <View styles={styles.followAction}>
                          <TouchableOpacity
                            style={[
                              styles.actionButton,
                              styles.actionButtonCanel,
                            ]}
                          >
                            <Text style={styles.followNameText}>Cancel</Text>
                          </TouchableOpacity>
                          {/* <Ionicons name="add" size={20} /> */}
                        </View>
                      </View>
                    )}
                  </>
                )}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default FollowSheet;

const styles1 = StyleSheet.create({
  overlayStyles1: {
    marginTop: 200,
  },

  modalSettingSheet: {
    paddingTop: 50,
    height: windowHeight,
  },
});
