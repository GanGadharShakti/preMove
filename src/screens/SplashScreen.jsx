// src/screens/SplashScreen.jsx
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../theme/colors';

const SplashScreen = ({ navigation }) => {
useEffect(() => {
  const timer = setTimeout(() => {
    // replace use karenge taaki user back se splash screen par na aa sake
    navigation.replace("MainTabs");
  }, 1000); // 1 second delay

  return () => clearTimeout(timer);
}, [navigation]);



  return (
    // <LinearGradient
    //   colors={["#0f2027", "#2c5364", "#00c6ff"]} // cool gradient bg
    //   style={styles.container}
    // >
    <View style={styles.container}>
      <Image
        source={require('../assets/images/componylogo.png')} // your uploaded logo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to Eleplace</Text>
    </View>

    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default SplashScreen;
