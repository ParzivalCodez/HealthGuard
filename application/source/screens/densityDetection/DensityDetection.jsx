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
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "../../../assets/styles/styles";

export default function VicinityDetection() {
  async function poster() {
    let data = await requestPost("get-earthquakes", "Hello!");
  }

  poster();

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
      ></MapView>
      {/*<View style={Styles.membershipList}>*/}
      {/*  <Text style={Styles.familyHeader}>Family Members Nearbys</Text>*/}
      {/*  <Button title={"Create"} onPress={PostEmergency} />*/}
      {/*</View>*/}
    </View>
  );
}
