// src/AppNavigator.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import BottomTabs from './navigation/BottomTabs';
import SplashScreen from '../src/screens/SplashScreen';
import AddressBar from './components/AddressBar';
const Stack = createNativeStackNavigator();
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 👇 First show splash */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* 👇 Then show your BottomTabs (unchanged) */}
      
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
