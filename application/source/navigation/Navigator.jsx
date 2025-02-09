import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens
import Welcome from "../screens/Welcome";
import Login from "../screens/security/LoginScreen";
import Register from "../screens/security/RegistrationScreen";

// Dashboard Screens
import Dashboard from "../screens/Dashboard/Dashboard";
import FamilyTracker from "../screens/FamilyTracker/FamilyTracker";
import EmergencyReportMap from "../screens/EmergencyReports/EmegencyMap";
import VicinityDetection from "../screens/densityDetection/DensityDetection";

// Create the stack navigator
const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="VicinityDetection"
        screenOptions={{
          headerShown: false, // This line hides the header
        }}
      >
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="DashboardHomeScreen" component={Dashboard} />
        <Stack.Screen name="FamilyTrackingScreen" component={FamilyTracker} />
        <Stack.Screen name="VicinityDetection" component={VicinityDetection} />
        <Stack.Screen
          name="EmergencyTrackingMap"
          component={EmergencyReportMap}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
