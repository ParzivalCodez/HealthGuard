import { View, Text } from "react-native";
import { Callout, Marker } from "react-native-maps";

export default function MarkerComponent(props) {
  const marker = {
    latlng: {
      latitude: props.data.location.latitude,
      longitude: props.data.location.longitude,
    },
    title: "My Marker",
    description: "This is a marker description.",
  };

  return (
    <Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    >
      {/* Customize the content of the callout here */}
      <Callout>
        <View>
          <Text style={{ fontWeight: "bold" }}>{marker.title}</Text>
          <Text>{marker.description}</Text>
        </View>
      </Callout>
    </Marker>
  );
}
