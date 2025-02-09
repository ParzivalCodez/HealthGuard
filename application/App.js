// Dependencies & Packages Import
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./source/navigation/Navigator";
import { MessageProvider } from "./source/api/socket/socket";
import ConnectToSocket from "./source/api/socket/socketConnect";

ConnectToSocket();

export default function App() {
  return (
    <MessageProvider>
      <Navigator />
    </MessageProvider>
  );
}
