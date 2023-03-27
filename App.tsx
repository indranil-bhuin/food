import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import VendorListScreen from './src/screens/Employee/VendorListScreen';
import SplashScreen from './src/screens/SplashScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import VendorDetailPage from './src/screens/Employee/VendorDetailPage';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SplashScreen from './src/screens/SplashScreen'
import LoginScreen from './src/screens/LoginScreen'
// import

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <LoginScreen />
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#594AB5',
    flexDirection: 'column'
  },

  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 150
  },

  image:{
    width: 232,
    height: 206,
    left: 20,
    top: 40
  },
  splashText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
  },
  splashTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  button: {
    width: 320,
    height: 70,
    marginTop: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#594AB5',
    fontFamily: 'arial',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
  }

})