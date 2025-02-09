import { StyleSheet } from "react-native";

const DashboardStyles = StyleSheet.create({
  DashboardContainer: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: "#FEFEFF",
  },
  headingText: {
    fontFamily: "DMSansLight",
    fontSize: 20,
    letterSpacing: 2,
    margin: 15,
  },
  dashboardHero: {
    flex: 0.3,
    backgroundColor: "#9590D5",
    borderRadius: 80,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 30,
    margin: 25,
  },
  navigation: {
    backgroundColor: "#9590D5",
    position: "absolute",
    bottom: 0,
    width: "100%",
    right: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  CategoriesContainer: {
    margin: 15,
  },
  CategoriesText: {
    fontFamily: "DMSansMedium",
    fontSize: 20,
  },
});

export default DashboardStyles;
