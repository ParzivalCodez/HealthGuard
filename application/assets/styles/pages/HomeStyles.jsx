import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bdbdbd",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  TextStyle: {
    fontFamily: "DMSansBold",
    textAlign: "center",
  },
  ButtonParent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    width: "90%",
    borderRadius: 50,
    marginBottom: 12,
  },
  ButtonMain: {
    marginBottom: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeStyles;
