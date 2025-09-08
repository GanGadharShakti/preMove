// src/AppNavigator.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

import BottomTabs from './navigation/BottomTabs';
import SplashScreen from './screens/SplashScreen';
import Additem from './screens/AddInventory';
import LoginPage from './screens/LoginPage';
import OtpScreen from './screens/OtpScreen'; // 👈 Create this file like I shared before

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Splash first */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* Login Flow */}
      <Stack.Screen name="MainsTabs" component={LoginPage} />
      <Stack.Screen name="Otp" component={OtpScreen} />

      {/* After login success → go to HomePage (BottomTabs) */}
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />

      <Stack.Screen name="AddItem" component={Additem} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
