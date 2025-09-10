import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OTPScreenCss } from '../assets/css/ScreensCss';

export default function OtpScreen({ route, navigation }) {
  const { phone } = route.params;
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Countdown timer for resend button
  useEffect(() => {
    let interval;
    if (isResendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer, isResendDisabled]);

  // ✅ Save JWT in AsyncStorage for 30 days
  const saveToken = async token => {
    try {
      const expiry = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days
      const data = JSON.stringify({ token, expiry });
      await AsyncStorage.setItem('APP_JWT_TOKEN', data);

      // check if really saved
      const stored = await AsyncStorage.getItem('APP_JWT_TOKEN');
    } catch (err) {
      console.error('Error saving JWT token:', err);
    }
  };

  // Verify OTP
  // Verify OTP
  const handleVerifyOtp = async () => {
    if (otp.length < 4) {
      Alert.alert('Error', 'Enter valid OTP');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.155:5000/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      });
      const data = await response.json();

      if (data.success && data.token) {
        // ✅ JWT store
        const jwtData = {
          token: data.token,
          expiry: data.expiry, // expiry backend se aa raha hai
        };
        await AsyncStorage.setItem('APP_JWT_TOKEN', JSON.stringify(jwtData));

        // ✅ user phone store
        await AsyncStorage.setItem('USER_PHONE', phone);

        // ✅ pura user object store
        if (data.user) {
          await AsyncStorage.setItem('USER_DETAILS', JSON.stringify(data.user));

          // Correct field name from API response
          if (data.user.id) {
            await AsyncStorage.setItem(
              'USER_LEAD_ID',
              data.user.lead_id.toString(),
            );
          }
        }

        // 🔎 Check all stored values
        const jwtStored = await AsyncStorage.getItem('APP_JWT_TOKEN');
        const phoneStored = await AsyncStorage.getItem('USER_PHONE');
        const userStored = await AsyncStorage.getItem('USER_DETAILS');
        const leadIdStored = await AsyncStorage.getItem('USER_LEAD_ID');

        navigation.replace('HomePage');
      } else {
        Alert.alert('Error', data.error || 'Invalid OTP');
      }
    } catch (err) {
      Alert.alert('Error', 'Server not reachable');
      console.error(err);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setIsResendDisabled(true);
    setTimer(60);

    try {
      const response = await fetch('http://192.168.0.155:5000/api/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Success', 'OTP resent successfully!');
      } else {
        Alert.alert('Error', data.error || 'Failed to resend OTP');
      }
    } catch (err) {
      Alert.alert('Error', 'Server not reachable');
      console.error('Resend OTP fetch error:', err);
    }
  };

  return (
    <View style={OTPScreenCss.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/componylogo.png')}
        style={OTPScreenCss.logo}
      />

      {/* Gradient Section */}
      <LinearGradient
        colors={['#00b894', '#0984e3']}
        style={OTPScreenCss.gradientBox}
      >
        <Text style={OTPScreenCss.otpTitle}>Enter OTP</Text>

        {/* OTP Input */}
        <TextInput
          style={OTPScreenCss.input}
          placeholder="----"
          keyboardType="number-pad"
          value={otp}
          onChangeText={setOtp}
          maxLength={4}
        />

        {/* Resend OTP */}
        <TouchableOpacity disabled={isResendDisabled} onPress={handleResendOtp}>
          <Text
            style={[
              OTPScreenCss.resend,
              { color: isResendDisabled ? 'white' : 'yellow' },
            ]}
          >
            {isResendDisabled ? `Resend OTP in ${timer}s` : 'Resend OTP'}
          </Text>
        </TouchableOpacity>

        {/* Verify Button */}
        <TouchableOpacity style={OTPScreenCss.button} onPress={handleVerifyOtp}>
          <Text style={OTPScreenCss.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
