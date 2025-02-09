import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
} from "react-native";
import Styles from "../../../assets/styles/styles";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard({ navigation }) {
  const [name, setName] = useState(0);
  AsyncStorage.getItem("FirstName").then((res) => {
    setName(res);
  });
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../../../assets/fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../../../assets/fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../../../assets/fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../../../assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../../../assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Or any other placeholder content
  }

  function paginationNavigate() {
    navigation.navigate("FamilyTrackingScreen");
  }

  return (
    <View style={Styles.DashboardStyles.DashboardContainer}>
      <View style={Styles.DashboardStyles.baseContainer}>
        <Text style={Styles.DashboardStyles.headingText}>Hi, {name}</Text>
      </View>
      <View style={Styles.DashboardStyles.dashboardHero}></View>
      <View style={Styles.DashboardStyles.CategoriesContainer}>
        <Text style={Styles.DashboardStyles.CategoriesText}>Categories</Text>
        <Button title={"Family Tracker"} onPress={paginationNavigate} />
      </View>
      <View style={Styles.DashboardStyles.navigation}>
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
      </View>
    </View>
  );
}
