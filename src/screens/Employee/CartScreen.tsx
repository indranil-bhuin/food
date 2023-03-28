import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
//import vendorData from './VendorDetailPage';
import RazorpayCheckout from 'react-native-razorpay';


const CartScreen = ({ route }) => {
  const { cart } = route.params;
   const { vendorData } = route.params;

  const [cartItems, setCartItems] = useState(cart);

  const addItemToCart = (item) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [item.id]: (prevCart[item.id] || 0) + 1,
    }));
  };

  const removeItemFromCart = (item) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[item.id] -= 1;
      if (updatedCart[item.id] === 0) {
        delete updatedCart[item.id];
      }
      return updatedCart;
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    Object.keys(cartItems).forEach((itemId) => {
      const item = vendorData.menu.find((item) => item.id === itemId);
      total += item.price * cartItems[itemId];
    });
    return total;
  };

// payment function

const handlePayment = () => {
  const options = {
    description: 'Payment for food items',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_live_vjRbx3MWMGxd9i',
    amount: calculateTotalPrice() * 100,
    name: vendorData.name,
    prefill: {
      email: 'example@example.com',
      contact: '1234567890',
      name: 'John Doe',
    },
    theme: { color: '#F37254' },
  };
  
  RazorpayCheckout.open(options)
    .then((paymentData) => {
      // handle success
      if (paymentData.status_code === 200)
      {
        
      }
      console.log(paymentData);
    })
    .catch((error) => {
      // handle failure
      console.log(error);
    });
};






  return (
    <View style={styles.cartContainer}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{vendorData.name}</Text>
        <View style={styles.hr} />
      </View>
      <Text style={styles.cartText}>Cart items:</Text>
      <View style={styles.cartBox}>
        {Object.keys(cartItems).length > 0 ? (
          Object.keys(cartItems).map((itemId) => {
            const item = vendorData.menu.find((item) => item.id === itemId);
            return (
              <View key={itemId} style={styles.cartItem}>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>
                    {item.price} x {cartItems[itemId]} = ₹
                    {item.price * cartItems[itemId]}
                  </Text>
                </View>
                <View style={styles.itemAction}>
                  <TouchableOpacity
                    style={styles.itemActionButton}
                    onPress={() => removeItemFromCart(item)}>
                    <Icon name="minus" size={20} color="#000" />
                  </TouchableOpacity>
                  <Text style={styles.itemQuantity}>{cartItems[itemId]}</Text>
                  <TouchableOpacity
                    style={styles.itemActionButton}
                    onPress={() => addItemToCart(item)}>
                    <Icon name="plus" size={20} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        ) : (
          <Text>Your cart is empty.</Text>
        )}
      </View>
        <Text style={styles.billText}>Detailed Bill:</Text>
      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>₹{calculateTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handlePayment}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
cartContainer: {
padding: 20,
},
cartText: {
fontSize: 15,
fontWeight: '700',
marginBottom: 10,
},
cartBox: {
backgroundColor: '#D3CCFF5E',
padding: 15,
borderRadius: 5,
marginBottom: 20,
},
cartItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
itemDetail: {
flex: 1,
},
itemName: {
fontSize: 13,
fontWeight: 'bold',
marginBottom: 5,
},
itemPrice: {
fontSize: 13,
color: '#888',
},
itemAction: {
flexDirection: 'row',
alignItems: 'center',
},
itemActionButton: {
backgroundColor: '#ccc',
padding: 5,
borderRadius: 5,
marginHorizontal: 5,
},
itemQuantity: {
fontSize: 13,
fontWeight: 'bold',
marginHorizontal: 10,
},
totalBox: {
backgroundColor: '#D3CCFF5E',
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 20,
marginBottom: 20,
borderRadius: 10
},
totalText: {
fontSize: 13,
fontWeight: 'bold',
},
totalPrice: {
fontSize: 13,
fontWeight: 'bold',
color: 'green',
},
checkoutButton: {
backgroundColor: '#594AB5',
padding: 10,
borderRadius: 5,
alignItems: 'center',
},
checkoutButtonText: {
fontSize: 20,
color: '#fff',
},
billText: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10
}
});