import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../api/auth";
import { addToken, setToken } from "../../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import { decodedToken } from "../../helpers/common";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LightSpeedOutLeft } from "react-native-reanimated";

const SignInScreen = () => {
  const navigation = useNavigation();
  const tokenPayload = useSelector((state) => state.auth?.tokenProfile);
  const dispatch = useDispatch();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (name, value) => {
    console.log(name, value);
    setFormLogin({
      ...formLogin,
      [name]: value
    });
  };

  const onLogin = async () => {
    try {
      const data = await login(formLogin);
      if (data) {
        console.log(data);
        if (data.token !== null) {
          dispatch(setToken(data.token))
          await AsyncStorage.setItem('token', data.token);
          console.log(12312313);
          navigation.navigate("HomeScreen");

        }
      } else {
        console.log("Dang Nhap that bai");
      }

    } catch (e) {

    }
  }

  return (
    <View>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChangeText={(text) => handleInputChange('email', text)}

          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry
            onChangeText={(text) => handleInputChange('password', text)}
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => onLogin()}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 130,
  },
  textInput: {
    padding: Spacing,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginVertical: Spacing / 2,
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.medium,
  },
});
