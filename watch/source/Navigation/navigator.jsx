import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens
import Security from "../screens/Security";
import FamilyTracker from "../screens/Mapping";

// Create the stack navigator
const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Security"
        screenOptions={{
          headerShown: false, // This line hides the header
        }}
      >
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="FamilyTracker" component={FamilyTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
