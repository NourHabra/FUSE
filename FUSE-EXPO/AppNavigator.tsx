import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home'; // Import the Home component

// Define the types for the navigation stack
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined; // Add Home to the navigation stack
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Optionally hide the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
