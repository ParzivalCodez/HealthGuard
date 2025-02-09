// Dependencies & Packages Import
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import requestPost from "../api/api";

export default function Welcome({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../../assets/fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../../assets/fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../../assets/fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../../assets/fonts/DMSans-Bold.ttf"),
  });

  // Font Loader
  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Or any other placeholder content
  }

  AsyncStorage.getItem("AuthenticationToken").then((res) => console.log(res));

  async function poster() {
    let data = await requestPost("poll-earthquakes", "Hello!");
  }

  poster();

  return (
    <View style={Styles.container}>
      <Text>Hello!</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
