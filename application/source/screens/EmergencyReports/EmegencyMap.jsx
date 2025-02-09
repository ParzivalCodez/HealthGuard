import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import requestPost from "../../api/api";
import MapView, { Circle } from "react-native-maps";

import { useEffect, useState } from "react";

import Styles from "../../../assets/styles/styles";
import axios from "axios";
import CircleComponent from "./components/CircleComponent";
import ProfileComponent from "../FamilyTracker/components/ProfileComponent";

export default function EmergencyReportMap() {
  const [LiveHarzardEvents, setLiveHazardEvents] = useState([]);

  useEffect(() => {
    const LivePollInterval = setInterval(async () => {
      let data = await axios
        .get("http://192.168.1.62:3000/hazard-send-emergencies")
        .then((res) => res.data);
      setLiveHazardEvents(data);
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts or before re-running the effect
    return () => {
      clearInterval(LivePollInterval);
    };
  }, []); // Empty dependency array means this effect runs once on mount and once on unmount
  const requestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      console.log("Permission to access location was allowed");
      await PostEmergency();
    } else {
      console.error("Permission is denied :(");
    }
  };

  const PostEmergency = async () => {
    const { coords } = await Location.getLastKnownPositionAsync();
    let Object = {
      Latitude: coords.latitude,
      Longitude: coords.longitude,
      ReporterID: await AsyncStorage.getItem("AuthenticationToken").then(
        (res) => res,
      ),
      CountReport: 1,
    };
    let data = await requestPost("hazard-create-emergency", Object);
  };
  useEffect(() => {
    requestPermission();
  }, []); // Empty dependency array means this runs once on mount

  let flattendArray = LiveHarzardEvents.flat();

  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.MapContainer}
        initialRegion={{
          latitude: 40.37481,
          longitude: 118.67365,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {LiveHarzardEvents.map((element, index) => (
          <CircleComponent key={index} data={element} />
        ))}
      </MapView>
      <View style={Styles.membershipList}>
        <Text style={Styles.familyHeader}>Family Members Nearbys</Text>
        <Button title={"Create"} onPress={PostEmergency} />
      </View>
    </View>
  );
}
