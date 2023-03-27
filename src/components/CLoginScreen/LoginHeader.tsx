import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropDown from './DropDown'

let role = [
    {
    id:1,
    name: 'Employee'
    },
    {
    id:2,
    name: 'Vendor'
    },
    {
    id:1,
    name: 'Admin'
    },
]

const LoginHeader = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    const onSelect = (item) =>{
        setSelectedItem(item)
    }

  return (
    <View style={styles.headerContainer}>
      <DropDown
      value={selectedItem} 
      data={role}
      onSelect={onSelect} 
      />
      <View style={styles.headerContainerBottom}>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginHeader

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
    flexDirection: 'row',
    
  }
})