import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginFooter = ({ showLoginForm, showRegisterForm }) => {

  return (
    <View style={styles.footerContainer}>
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <RegisterForm />}
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 5,
  },
});
