import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import requestPost from "../../api/api";
import MapView from "react-native-maps";
import MarkerComponent from "./components/MarkerComponent";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Styles from "../../../assets/styles/styles";
import ProfileComponent from "./components/ProfileComponent";

import { isPointWithinRadius } from "geolib";
import { io } from "socket.io-client";

export default function FamilyTracker() {
  // State & Context Hooks
  const [context, setContext] = useState([]);

  // const [fontsLoaded, fontError] = useFonts({
  //   DMSansThin: require("../../../assets/fonts/DMSans_36pt-Thin.ttf"),
  //   DMSansLight: require("../../../assets/fonts/DMSans_36pt-Light.ttf"),
  //   DMSansMedium: require("../../../assets/fonts/DMSans_36pt-Medium.ttf"),
  //   DMSansRegular: require("../../../assets/fonts/DMSans-Regular.ttf"),
  //   DMSansBold: require("../../../assets/fonts/DMSans-Bold.ttf"),
  // });

  // First Fetch the Users Location
  // Then Fetch their relatives location

  useEffect(() => {
    const socket = io("http://192.168.1.62:5000");

    // Log the connection and send device identifier upon connecting
    socket.on("connect", () => {
      console.log(`You connected with id #${socket.id}`);
      socket.emit("device-identifier", { type: "Phone", id: socket.id });
    });

    // Log any received messages
    socket.on("receive-message", (message) => {
      console.log(message);
      updateLocation(message).then((r) => console.log(r));
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      socket.off("connect");
      socket.off("receive-message");
      socket.close(); // Optionally close the socket if no longer needed
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  const updateLocation = async (coordinates) => {
    let Object = {
      Latitude: coordinates.Latitude,
      Longitude: coordinates.Longitude,
      token: await AsyncStorage.getItem("AuthenticationToken"),
    };
    let data = await requestPost("update-location", Object);
    console.log(data);
    setContext(data);
  };

  const flattenedArray = context.flat();

  // console.log(flattenedArray);

  return (
    <View style={Styles.container}>
      <MapView style={Styles.MapContainer}>
        {flattenedArray.map((element, index) => (
          <MarkerComponent key={index} data={element} />
        ))}
      </MapView>
      <View style={Styles.membershipList}>
        <Text style={Styles.familyHeader}>Family Members Nearby</Text>

        <ScrollView style={Styles.contentMargin}>
          {flattenedArray.map((element, index) => (
            <ProfileComponent key={index} data={element} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
