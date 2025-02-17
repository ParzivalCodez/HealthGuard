// Dependencies & Packages Import
import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { io } from "socket.io-client";
import * as Location from "expo-location";

function WorldShelters() {
  // Function to Ask the user for their location
  const requestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      console.log("Permission to access location was allowed");
      await updateLocation();
    } else {
      console.error("Permission is denied :(");
    }
  };

  // Updates the Users location and performs side effects
  const updateLocation = async () => {
    const { coords } = await Location.getLastKnownPositionAsync();
    let Object = {
      Latitude: coords.latitude,
      Longitude: coords.longitude,
    };
    console.log(Object);
    socket.emit("watch-to-server", Object);
  };

  useEffect(() => {
    requestPermission();
  }, []); // Empty dependency array means this runs once on mount

  // socket.emit("phone-to-server", "Hello World!");
  return (
    <View>
      <Text>hello World!</Text>
    </View>
  );
}

export default WorldShelters;
