import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import requestPost from "../../../source/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Styles from "../../../assets/styles/styles";
import FlatButton from "../../layouts/common/Button";
import axios from "axios";

export default function Login({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../../../assets/fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../../../assets/fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../../../assets/fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../../../assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../../../assets/fonts/DMSans-Bold.ttf"),
  });

  const [emailAddress, setEmailAddress] = useState(0);
  const [password, setPassword] = useState(0);

  function emailAddressHandler(enteredAddress) {
    setEmailAddress(enteredAddress);
  }

  function passwordHandler(enteredPassword) {
    setPassword(enteredPassword);
  }

  async function accountLoginHandler() {
    const UserData = {
      emailAddress: emailAddress,
      password: password,
    };
    let data = await requestPost("login-account/application", UserData);
    console.log(data.UniqueToken);
    let token = data.UniqueToken;
    let firstName = data.FirstName;
    await AsyncStorage.setItem("AuthenticationToken", token);
    await AsyncStorage.setItem("FirstName", firstName);
    // navigation.navigate("DashboardHomeScreen");

    await axios.post("http://192.168.1.62:3000/poll-communicate-application", {
      data: token,
    });
  }

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Or any other placeholder content
  }

  return (
    <View style={Styles.LoginContainer}>
      <View style={Styles.LoginIconix}>
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/arrow-back-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.png")}
        />
      </View>
      <View style={Styles.WelcomeContainer}>
        <Text style={Styles.WelcomeHeader}>Welcome Back!</Text>
        <Text style={Styles.WelcomeSubTxt}>
          Please fill in your account details
        </Text>
      </View>
      <View style={Styles.RegistrationContainer}>
        <TextInput
          placeholder={"Email"}
          style={Styles.InputContainer}
          onChangeText={emailAddressHandler}
        ></TextInput>
        <TextInput
          placeholder={"Password"}
          style={Styles.InputContainer}
          onChangeText={passwordHandler}
        ></TextInput>
      </View>
      <View style={Styles.loginIconParent}>
        <View style={Styles.loginIcon}></View>
        <View style={Styles.loginIcon}></View>
        <View style={Styles.loginIcon}></View>
      </View>
      <View>
        <FlatButton
          content={"Sign In"}
          ButtonStyles={{
            backgroundColor: "#B252DC",
            padding: 15,
            marginTop: 20,
            borderRadius: 5,
            width: "50%",
          }}
          TextStyle={{
            color: "white",
            fontFamily: "DMSansBold",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
          TouchStyles={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          event={accountLoginHandler}
        />
      </View>
    </View>
  );
}
