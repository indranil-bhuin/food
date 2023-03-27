import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DropDown from './DropDown';
import {Image} from 'react-native-elements';
let role = [
  {
    id: 1,
    name: 'Employee',
  },
  {
    id: 2,
    name: 'Vendor',
  },
  {
    id: 3,
    name: 'Admin',
  },
];

const LoginHeader = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [start, setStart] = useState(true);
  const [islogin, setIslogin] = useState(true);
  const [myrole, setMyRole] = useState(null);
  const toogleLogin = () => {
    setIslogin(true);
    console.log(islogin);
  };
  const toogleRegister = () => {
    setIslogin(false);
    console.log(islogin);
  };

  const onSelect = item => {
    setMyRole(item.name);
    setSelectedItem(item);
    setStart(false);
    console.log(selectedItem);
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <DropDown value={selectedItem} data={role} onSelect={onSelect} />
        <View style={styles.headerContainerBottom}>
          {myrole === null ? (
            <>
              <Text>Please choose your role</Text>
              <Text
                style={{
                  position: 'absolute',
                  bottom: 14,
                  left: -5,
                  right: -5,
                  height: 1,
                  borderRadius: 8,
                  backgroundColor: 'black',
                }}></Text>
            </>
          ) : myrole === 'Admin' ? (
            <>
              <TouchableOpacity style={styles.element1} onPress={toogleLogin}>
                <Text>Login</Text>
                <Text style={styles.underline}></Text>

                {islogin ? (
                  <Text style={styles.underline}></Text>
                ) : (
                  <Text style={styles.fakeUnderline}></Text>
                )}
              </TouchableOpacity>
            </>
          ) : myrole === 'Employee' || 'Vendor' ? (
            <>
              <TouchableOpacity style={styles.element1} onPress={toogleLogin}>
                <Text>Login</Text>
                {islogin ? (
                  <Text style={styles.underline}></Text>
                ) : (
                  <Text style={styles.fakeUnderline}></Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.element2}
                onPress={toogleRegister}>
                <Text style={{color: 'black'}}>Register</Text>
                {islogin ? (
                  <Text style={styles.fakeUnderline}></Text>
                ) : (
                  <Text style={styles.underline}></Text>
                )}
              </TouchableOpacity>
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
      <View>
        {start === true ? (
          <Image style={styles.images} source={require('../../../assets/images/open.png')} />
        ) : myrole === 'Employee' ? (
          islogin ? (
            <Text>Hello Employee Login</Text>
          ) : (
            <Text>Hello Employee Register</Text>
          )
        ) : myrole === 'Vendor' ? (
          islogin ? (
            <Text>Hello Vendor Login</Text>
          ) : (
            <Text>Hello Vendor Register</Text>
          )
        ) : (
          <Text>Hello Admin</Text>
        )}
      </View>
    </>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 380,
    backgroundColor: '#594AB5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContainerBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -60,
  },
  element1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 200,
  },
  element2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 200,
  },
  underline: {
    position: 'absolute',
    bottom: -5,
    left: 30,
    right: 30,
    height: 1,
    borderRadius: 8,
    backgroundColor: 'black',
  },

  fakeUnderline: {
    position: 'absolute',
    bottom: -5,
    left: 30,
    right: 30,
    height: 1,
    borderRadius: 8,
  },
  images:{
    width: 232,
            height: 206,
            left: 90,
            top: 10
  }
});
