// Dependencies & Packages Import
import { StyleSheet, Text, View, Button } from "react-native";
import { useFonts } from "expo-font";

// Styles Components Import
import HomeStyles from "./pages/HomeStyles";
import LoginStyles from "./pages/LoginStyles";
import DashboardStyles from "./pages/DashboardStyles";
import MapStyles from "./pages/mapping/MapStyles";
import ChatStyles from "./pages/mapping/ChatApp";

function StateHook() {
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../fonts/DMSans-Bold.ttf"),
  });
}

const Styles = StyleSheet.create({
  HomeStyles,
  LoginStyles,
  DashboardStyles,
  MapStyles,
  ChatStyles,
  container: {
    flex: 1,
  },
  MapContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  membershipList: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  familyHeader: {
    fontFamily: "DMSansBold",
    fontSize: 25,
  },
  familyMember: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  familyMemberIcon: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  familyName: {
    fontFamily: "DMSansBold",
    fontSize: 18,
    letterSpacing: 1,
  },
  relationShipStatus: {
    fontFamily: "DMSansThin",
    fontSize: 18,
    letterSpacing: 1,
  },
  memberTxt: {
    fontFamily: "DMSansMedium",
  },
  familyRole: {
    fontFamily: "DMSansThin",
    textAlign: "center",
  },

  //   Login
  LoginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 80,
  },

  WelcomeContainer: {
    flex: 0,
  },
  WelcomeHeader: {
    fontFamily: "DMSansBold",
    fontSize: 30,
    letterSpacing: 2,
  },
  WelcomeSubTxt: {
    fontFamily: "DMSansLight",
    letterSpacing: 2,
  },
  RegistrationContainer: {
    marginTop: 30,
  },
  InputContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontFamily: "DMSansLight",
    fontSize: 20,
    paddingBottom: 12,
    marginTop: 30,
  },
  icon: {
    height: 40,
    width: 40,
  },
  LoginIconix: {
    marginBottom: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginIconParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 35,
    gap: 20,
  },
  loginIcon: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    borderRadius: 25,
  },
  //   Dashboard Home Screen

  //   CHat APp

  contentMargin: {
    paddingTop: 20,
    position: "relative",
  },
  descriptiveDescription: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});

export default Styles;
