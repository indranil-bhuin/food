import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      </View>
      <View style={styles.splashTextContainer}>
        <Text style={styles.splashText}>The Ultimate Foodcourt</Text>
        <Text style={styles.splashText}>for Nineleaps</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen

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