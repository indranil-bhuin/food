import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderStatusScreen = () => {

  return (
    <View style={styles.orderStatusContainer}>
        <View style={styles.statusContainer}>
            <Text style={styles.idText}>Order Id: #1001</Text>
            <View style={styles.statusImageContainer}>
            <Image source={require('../../../assets/images/prepare.png')} style={styles.statusImage} />
            </View>
            <Text style={styles.idText}>Status: Preparing your food</Text>
        </View>
        <View>
            <Text style={styles.idOrderText}>Your Orders</Text>
            <View style={styles.orderContainer}>
                <View>
                    <Text style={styles.orderText}>Gobi Parantha</Text>
                <Text style={styles.orderText}>75</Text>
                <Text style={styles.orderText}>2x</Text>
                </View>
                <View>
                    <Text style={styles.orderText}>Gobi Parantha</Text>
                <Text style={styles.orderText}>75</Text>
                <Text style={styles.orderText}>2x</Text>
                </View>
            </View>
            <View style={styles.qrContainer}>

            <Text style={styles.idQRText}>Your Unique QR code</Text>
            <Text style={styles.idQRText}>Show this to the vendor</Text>
            <Text style={styles.idQRText}>to receive your order</Text>
            </View>
        </View>
    </View>
  )
}

export default OrderStatusScreen

const styles = StyleSheet.create({
    orderStatusContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#FFF'
    },
    statusContainer: {
        width: 340,
        height: 280,
        backgroundColor: '#594AB5',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    idTextContainer: {

    },
    idText: {
        marginTop: 20,
        color: '#FFF'
    },
    statusImageContainer: {
        backgroundColor: '#FFF',
        height: 160,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 20
    },
    statusImage: {
        height: 150,
        width: 150
    },
    idOrderText: {
        marginTop: 10,
        color: '#000',
        fontWeight: '700',
        alignSelf: 'center'
    },
    orderContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        //paddingLeft: 10,
        width: 340,
        backgroundColor: '#D3CCFF5E',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'column',
    },
    orderText: {
        fontSize: 10
    },
    idQRText: {
        //marginTop: 10,
        color: '#000',
        fontWeight: '700',
        alignSelf: 'center'
    },
    qrContainer: {
        marginTop: 20,
        height: 400,
        
    }
})