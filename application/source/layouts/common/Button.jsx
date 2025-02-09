import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function FlatButton(props) {
  return (
    <TouchableOpacity onPress={props.event} style={props.TouchStyles}>
      <View style={props.ButtonStyles}>
        <Text style={props.TextStyle}>{props.content}</Text>
      </View>
    </TouchableOpacity>
  );
}
