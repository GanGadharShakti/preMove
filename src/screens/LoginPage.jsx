// screens/LoginScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  LoginScreenCssheet,
  Image,
} from 'react-native';
import { LoginScreenCss } from '../assets/css/ScreensCss';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleSendCode = () => {
    if (phone.length < 10) {
      alert('Enter valid phone number');
      return;
    }
    // ✅ Here call your backend API to send OTP
    console.log('Sending OTP to:', phone);

    // Move to OTP screen
    navigation.navigate('Otp', { phone });
  };

  return (
    <View style={LoginScreenCss.container}>
      <Image
        source={require('../assets/images/componylogo.png')} // place your logo here
        style={LoginScreenCss.logo}
        resizeMode="contain"
      />
      <Text style={LoginScreenCss.loginText}>Login to continue</Text>

      <View style={LoginScreenCss.inputContainer}>
        <Text style={LoginScreenCss.countryCode}>+91</Text>
        <TextInput
          style={LoginScreenCss.input}
          placeholder="Enter Phone Number..."
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <Text style={LoginScreenCss.note}>We will send an otp to confirm the number</Text>

      <TouchableOpacity style={LoginScreenCss.button} onPress={handleSendCode}>
        <Text style={LoginScreenCss.buttonText}>Get verification code</Text>
      </TouchableOpacity>
    </View>
  );
}


