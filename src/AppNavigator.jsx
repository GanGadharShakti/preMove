// src/AppNavigator.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

import BottomTabs from './navigation/BottomTabs';
import SplashScreen from './screens/SplashScreen';
import Additem from './screens/AddInventory';
import LoginPage from './screens/LoginPage';
import OtpScreen from './screens/OtpScreen';
import ManagerLoginScreen from './screens/ManagerLoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 1️⃣ Splash decides where to go */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* 2️⃣ Auth Flow */}
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Otp" component={OtpScreen} />

      {/* 3️⃣ Home Flow */}
      <Stack.Screen
        name="HomePage"
        component={BottomTabs}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />

      {/* 4️⃣ Other Screens */}
      <Stack.Screen name="AddItem" component={Additem} />
      <Stack.Screen name="MangerLogin" component={ManagerLoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
