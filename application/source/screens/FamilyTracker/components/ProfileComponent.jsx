import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Styles from "../../../../assets/styles/styles";

const ProfileComponent = (props) => {
  console.log(props.data.relationshipStatus);

  return (
    <TouchableOpacity onPress={() => props.event(props.data)}>
      <View style={Styles.familyMember}>
        <View style={Styles.familyMemberIcon}></View>
        <View>
          <Text style={Styles.familyName}>
            {props.data.firstName} {props.data.lastName}
          </Text>
          <Text style={Styles.relationShipStatus}>
            {props.data.relationshipStatus}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProfileComponent;
