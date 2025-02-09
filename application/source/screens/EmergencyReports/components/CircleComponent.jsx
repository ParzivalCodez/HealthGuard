import { Circle } from "react-native-maps";

export default function CircleComponent(props) {
  console.log(props.data);
  return (
    <Circle
      center={{
        latitude: props.data.Latitude,
        longitude: props.data.Longitude,
      }}
      radius={1000} // Radius in meters
      fillColor="rgba(135, 206, 235, 0.5)" // Semi-transparent blue
      strokeColor="rgba(0,0,0,0.5)" // Semi-transparent black
      strokeWidth={2}
    />
  );
}
