import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VendorListScreen from '../screens/Employee/VendorListScreen';
import SplashScreen from '../screens/SplashScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={VendorListScreen}></Tab.Screen>
        <Tab.Screen name="SplashScreen" component={SplashScreen}></Tab.Screen>
        <Tab.Screen name="VendorListScreen" component={VendorListScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})