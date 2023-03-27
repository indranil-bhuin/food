// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// // import LoginFooter from '../components/LoginFooter'
import LoginHeader from '../components/CLoginScreen/LoginHeader';

// export default const LoginScreen = () => {
// //   const handleLoginPress = () => {
// //     console.log('Login button pressed');
// //   };

// //   const handleRegisterPress = () => {
// //     console.log('Register button pressed');
// //   };

//   return (
//     <View>
//       <LoginHeader />
//     </View>
//   );
// };
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <LoginHeader/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})