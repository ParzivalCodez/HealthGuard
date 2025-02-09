import { StyleSheet } from "react-native";

const MapStyles = StyleSheet.create({
  MapContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  membershipList: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  familyHeader: {
    fontFamily: "DMSansBold",
    fontSize: 25,
  },
  familyMember: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    display: "flex",
    flexDirection: "row",
  },
  familyMemberIcon: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  familyName: {
    fontFamily: "DMSansThin",
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: 15,
  },
  memberTxt: {
    fontFamily: "DMSansMedium",
  },
  familyRole: {
    fontFamily: "DMSansThin",
    textAlign: "center",
  },
});

export default MapStyles;
