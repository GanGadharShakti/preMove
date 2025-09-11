import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkAuth = async () => {
      const phone = await AsyncStorage.getItem('USER_PHONE');
      console.log('📦 Stored USER_PHONE:', phone);
      if (!phone) return navigation.replace('Login');

      try {
        const res = await fetch(
          `http://192.168.0.155:5000/api/check-jwt?phone=${phone}`,
        );
        const data = await res.json();
        console.log("🔍 API response:", data);

        if (data.success && data.token && Date.now() < data.expiry) {
          console.log('✅ JWT valid');

          // Store JWT
          await AsyncStorage.setItem(
            'APP_JWT_TOKEN',
            JSON.stringify({
              token: data.token,
              expiry: data.expiry,
            }),
          );

          // Store USER_DETAILS
          if (data.user) {
            await AsyncStorage.setItem(
              'USER_DETAILS',
              JSON.stringify(data.user),
            );

            // Save ID (lead_id or manager_id)
            if (data.user.id) {
              await AsyncStorage.setItem(
                'USER_ID',
                data.user.id.toString(),
              );
            }

            // Save TYPE (customer / manager)
            if (data.user.type) {
              await AsyncStorage.setItem(
                'USER_TYPE',
                data.user.type,
              );
            }
          }

          navigation.replace('HomePage');
        } else {
          console.log('❌ JWT invalid or expired, navigating to Login');
          navigation.replace('Login');
        }
      } catch (err) {
        console.error('⚠️ Error calling check-jwt API:', err);
        navigation.replace('Login');
      }
    };

    const timer = setTimeout(checkAuth, 1200);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/componylogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#03B5A7" />
      <Text style={styles.text}>Welcome to Eleplace</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: { width: 180, height: 180, marginBottom: 20 },
  text: {
    marginTop: 15,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default SplashScreen;
