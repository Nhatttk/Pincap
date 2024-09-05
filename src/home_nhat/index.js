import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
const WelcomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />

      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            PinCap
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchLine}
          >
            Tự Tin Khoe Cá Tính ☺
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(600).springify()}>
            <Pressable
              onPress={() => navigation.navigate("SignInScreen")}
              style={styles.startButton}
            >
              <Text style={styles.startText}>Start</Text>
            </Pressable>
            {/* <Image
              // styles={styles.imagea}
              source={{
                uri: "https://statics.vinwonders.com/cau-rong-da-nang-3_1688885156.jpg",
              }}
            /> */}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.frontWeights.bold,
  },
  punchLine: {
    fontSize: hp(2),
    fontWeight: theme.frontWeights.medium,
    color: theme.colors.neutral(0.9),
    marginBottom: 15,
    letterSpacing: 1,
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: theme.frontWeights.medium,
    letterSpacing: 1,
  },
});

export default WelcomeScreen;
