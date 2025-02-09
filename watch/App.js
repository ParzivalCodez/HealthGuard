// Dependencies & Packages Import
import { Button, StyleSheet, Text, View } from "react-native";
import { io } from "socket.io-client";

// Screens Navigation
import Navigator from "./source/Navigation/navigator";

export default function App() {
  return <Navigator />;
}
