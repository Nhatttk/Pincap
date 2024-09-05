import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../api/auth";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirmation, setErrorPasswordConfirmation] =
    useState("");

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    // Kiểm tra validation ngay khi người dùng nhập liệu
    if (!text) {
      setErrorFirstName("Vui lòng nhập First Name");
    } else {
      setErrorFirstName("");
    }
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
    // Kiểm tra validation ngay khi người dùng nhập liệu
    if (!text) {
      setErrorLastName("Vui lòng nhập Last Name");
    } else {
      setErrorLastName("");
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    // Kiểm tra validation ngay khi người dùng nhập liệu
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(text)) {
      setErrorEmail("Email không hợp lệ");
    } else {
      setErrorEmail("");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    // Kiểm tra validation ngay khi người dùng nhập liệu
    if (text.length < 6) {
      setErrorPassword("Password >= 6 ky tu");
    } else {
      setErrorPassword("");
    }
  };

  const handlePasswordConfirmationChange = (text) => {
    setPasswordConfirmation(text);
    // Kiểm tra validation ngay khi người dùng nhập liệu
    if (text.length < 6) {
      setErrorPasswordConfirmation("Password >= 6 ky tu");
    }
    else {
      setErrorPasswordConfirmation("");
    }
  };
  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password || !passwordConfirmation) {
      alert("Vui long check lai thong tin dang ky")
      return; 
    }
    if(password !== passwordConfirmation){
      alert("Passwork khong khop");
      return;
    }
    
    const dataSignUp = {
      "firstName" : firstName,
      "lastName" : lastName,
      "email" : email,
      "password" : password,
      "password-confirmation" : passwordConfirmation
    }
    // Nếu tất cả điều kiện validation đều được đáp ứng, tiến hành đăng ký
    console.log("Đăng ký thành công!");
    try {
      const data = await register(dataSignUp);
      if (data) {
        console.log(data);
        navigation.navigate("SignInScreen")
      } else {
        console.log("Dang Nhap that bai");
      }

    } catch (e) {
      console.log(e.toString());
    }
  };
  return (
    <View style={styles.safe}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={{ padding: Spacing * 2 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Sign Up Here
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
        <View style={{ marginVertical: Spacing * 3 }}>
          <TextInput
            placeholder="First Name"
            style={styles.textInput}
            value={firstName}
            onChangeText={handleFirstNameChange}
          />
          {errorFirstName ? (
            <Text style={styles.errorMessage}>{errorFirstName}</Text>
          ) : null}
          <TextInput
            placeholder="Last Name"
            style={styles.textInput}
            value={lastName}
            onChangeText={handleLastNameChange}
          />
          {errorLastName ? (
            <Text style={styles.errorMessage}>{errorLastName}</Text>
          ) : null}
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={handleEmailChange}
          />
          {errorEmail ? (
            <Text style={styles.errorMessage}>{errorEmail}</Text>
          ) : null}
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
          />
          {errorPassword ? (
            <Text style={styles.errorMessage}>{errorPassword}</Text>
          ) : null}
          <TextInput
            placeholder="Password Confirmation"
            style={styles.textInput}
            secureTextEntry
            value={passwordConfirmation}
            onChangeText={handlePasswordConfirmationChange}
          />
          {errorPasswordConfirmation ? (
            <Text style={styles.errorMessage}>{errorPasswordConfirmation}</Text>
          ) : null}
        </View>
        <TouchableOpacity
          onPress={handleSignUp}
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
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={{ marginVertical: Spacing * 3 }}>
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

export default SignUpScreen;

const styles = StyleSheet.create({
  safe: {
    marginTop: 0,
  },
  topImageContainer: {
    top: 0,
  },
  topImage: {
    top: 0,
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
  errorMessage: {
    color: "red",
    fontSize: FontSize.small,
    marginLeft: Spacing,
  },
});
