import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import VendorCard from '../../components/CVendorListScreen/VendorCard'

const VendorListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
            <Image source={require('../../../assets/images/AllVendors.png')} style={styles.image} />
        </View>
        <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>All Vendors</Text>
            <View style={styles.hr}></View>
        </View>
        <View>
            <VendorCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default VendorListScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    scrollView: {

    },
    text: {

    },
    titleTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70
    },
    image: {
        height: 200,
        width: 340,
        borderRadius: 10
    },
    imageContainer: {
        marginTop: 50
    },
    titleText: {
        fontSize: 25,
        fontWeight: '700',
        color: 'black'
    },
    hr: {
        width: 80,
        height: 2,
        backgroundColor: '#594AB5',
        borderRadius: 10
    }
})