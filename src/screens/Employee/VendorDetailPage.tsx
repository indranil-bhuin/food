import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Dimensions, Modal } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartScreen from './CartScreen';
import { useNavigation } from '@react-navigation/native';


const VendorDetailPage = () => {
    const navigation = useNavigation();

    //all Vendors data
  const data = {
    vendors: [
      {
        name: 'Parantha Plaza',
        banner_image: 'https://assets.box8.co.in/default-picture-shape/web/product/756',
        rating: 4.5,
        menu: [
          {
            id: '0',
            name: 'Aloo Parantha',
            price: 1,
            veg: true,
            itemImage: 'https://www.spiceupthecurry.com/wp-content/uploads/2014/05/aloo-paratha-2.jpg',
            description: 'Aloo Parantha is a popular Indian flatbread stuffed with spiced mashed potatoes. Our version is made with fresh, locally sourced ingredients and cooked to perfection on a tawa. Served with a side of tangy pickle and creamy yogurt, it is the perfect breakfast or lunch option for those looking for a wholesome and filling meal.'
          },
          {
            id: '1',
            name: 'Paneer Parantha',
            price: 70,
            veg: true,
            itemImage: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2022/03/Paneer-Paratha-Recipe-Step-By-Step-Instructions-scaled.jpg?resize=1024%2C681&quality=65&strip=all&ssl=1',
            description: 'Paneer Parantha is a delicious Indian flatbread stuffed with crumbled cottage cheese and aromatic spices. Our version is made with fresh, locally sourced paneer and cooked to perfection on a tawa. Served with a side of tangy pickle and creamy yogurt, it is the perfect breakfast or lunch option for vegetarians and cheese lovers.'
          },
          {
            id: '2',
            name: 'Chicken Parantha',
            price: 120,
            veg: false,
            itemImage: 'https://www.licious.in/blog/wp-content/uploads/2020/04/shutterstock_83591092-600x381.jpg',
            description: 'Chicken Parantha is a mouth-watering Indian flatbread stuffed with spiced chicken mince. Our version is made with fresh, locally sourced chicken and cooked to perfection on a tawa. Served with a side of tangy pickle and creamy yogurt, it is the perfect breakfast or lunch option for meat lovers.'
          },
          {
            id: '3',
            name: 'Butter Chicken',
            price: 150,
            veg: false,
            itemImage: 'https://www.pepperdelight.com/wp-content/uploads/2020/10/pepper-delight-butter-chicken-1-scaled.jpg',
            description: 'Butter Chicken is a classic Indian dish made with tender chicken cooked in a creamy tomato-based sauce. Our version is made with the freshest ingredients and a secret blend of aromatic spices. Served with a side of fluffy basmati rice and crispy papadum, it is the perfect dinner option for those looking for a rich and indulgent meal.'
          },
          {
            id: '4',
            name: 'Veg Noodles',
            price: 80,
            veg: true,
            itemImage: 'https://www.whiskaffair.com/wp-content/uploads/2020/10/Veg-Hakka-Noodles-2-3-500x500.jpg',
            description: 'Veg Noodles is a popular Indo-Chinese dish made with stir-fried noodles and vegetables. Our version is made with fresh, locally sourced veggies and cooked to perfection on a high flame. Served with a side of spicy schezwan sauce and crispy spring rolls, it is the perfect dinner option for those looking for a light and flavorful meal.'
          },
          {
            id: '5',
            name: 'Egg Fried Rice',
            price: 90,
            veg: false,
            itemImage: 'https://www.whiskaffair.com/wp-content/uploads/2017/11/Schezwan-Egg-Fried-Rice-3-500x375.jpg',
            description: 'Egg Fried Rice is a classic Chinese dish made with fluffy rice, scrambled eggs, and vegetables. Our version is made with premium quality rice and farm-fresh eggs, and cooked to perfection on a high flame. Served with a side of spicy schezwan sauce and crispy spring rolls, it is the perfect dinner option for those looking for a quick and tasty meal.'
          },
        ],
      },
    ],
  };

  //Vendor details functions

  const vendorData = data.vendors[0];
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState({});

  const filteredMenu = vendorData.menu.filter((item) => {
    if (filter === 'All') {
      return item.name.toLowerCase().includes(searchText.toLowerCase().trim());
    } else if (filter === 'Veg') {
      return item.veg && item.name.toLowerCase().includes(searchText.toLowerCase().trim());
    } else if (filter === 'NonVeg') {
      return !item.veg && item.name.toLowerCase().includes(searchText.toLowerCase().trim());
    }
  });

  const addItemToCart = (itemId) => {
  setCart((prevCart) => ({
    ...prevCart,
    [itemId]: (prevCart[itemId] || 0) + 1,
  }));
};

const removeItemFromCart = (itemId) => {
  setCart((prevCart) => {
    const updatedCart = { ...prevCart };
    updatedCart[itemId] -= 1;
    if (updatedCart[itemId] === 0) {
      delete updatedCart[itemId];
    }
    return updatedCart;
  });
};

const calculateTotalPrice = () => {
  let totalPrice = 0;
  for (const itemId in cart) {
    const item = vendorData.menu.find((item) => item.id === itemId);
    totalPrice += item.price * cart[itemId];
  }
  return totalPrice;
};

//Bottom Drawer Functions

const windowHeight = Dimensions.get('window').height;
const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
const handleOpenBottomSheet = () => {
  setIsBottomSheetOpen(true);
};
const handleCloseBottomSheet = () => {
  setIsBottomSheetOpen(false);
};

const [selectedItem, setSelectedItem] = useState(null);

//End of Bottom Drawer Functions

  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
        <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{vendorData.name}</Text>
            <View style={styles.hr} />
        </View>
        <View style={styles.bannerImageContainer}>
            <Image source={{ uri: vendorData.banner_image }} style={styles.bannerImage} />
            <View style={styles.ratingContainer}>
                <View style={styles.ratingTextContainer}>
                    <Text style={styles.ratingText}>{vendorData.rating}</Text>
                </View>
            </View>
        </View>
        <View style={styles.searchBarContainer}>
          <Icon name="search1" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search food by name..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        <View style={styles.filterContainer}>
            <TouchableOpacity
                onPress={() => setFilter('All')}
                style={[styles.bothFilterButton, filter === 'All' && styles.filterButtonSelected]}>
                <Image source={require('../../../assets/images/vegnonveg.png')} style={styles.vegNonVegBothSelector} />
                <Text style={[styles.filterButtonText, filter === 'All' && styles.filterButtonTextSelected]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setFilter('Veg')}
                style={[styles.filterVegButton, filter === 'Veg' && styles.filterButtonSelected]}>
                <Image source={require('../../../assets/images/veg.png')} style={styles.vegNonVegSelector} />
                <Text style={[styles.filterButtonText, filter === 'Veg' && styles.filterButtonTextSelected]}>Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setFilter('NonVeg')}
                style={[styles.filterNonVegButton, filter === 'NonVeg' && styles.filterButtonSelected]}>
                <Image source={require('../../../assets/images/nonveg.png')} style={styles.vegNonVegSelector} />
                <Text style={[styles.filterButtonText, filter === 'NonVeg' && styles.filterButtonTextSelected]}>NonVeg</Text>
            </TouchableOpacity>
        </View>
      <View style={styles.contentContainer}>
          <Text style={styles.menuTitle}>
            Menu ({filteredMenu.length} items):
          </Text>
          {filteredMenu.map((item, index) => (
            <TouchableOpacity
            key={index}
            onPress={() => {
            setSelectedItem(item);
            handleOpenBottomSheet();
            }}>
            <View style={styles.menuItemContainer} key={index}>
              <View style={styles.itemImageContainer}>
                <Image
                  source={{ uri: item.itemImage }}
                  style={styles.itemImage}
                />
              </View>
              <View style={styles.itemNamePriceContainer}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemVeg}>{item.veg ? <Image source={require('../../../assets/images/veg.png')} style={styles.vegNonVegIcon} /> : <Image source={require('../../../assets/images/nonveg.png')} style={styles.vegNonVegIcon} />}</Text>
              </View>
            <View>
                <Text style={styles.menuItemPrice}>{`₹${item.price}`}</Text>
                <View style={styles.addToCartContainer}>
                    {cart[item.id] ? (
                        <View style={styles.cartButtonContainer}>
                            <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
                                <Icon name="minus" size={20} color="#000" />
                            </TouchableOpacity>
                        <Text style={styles.cartItemQuantity}>{cart[item.id]}</Text>
                            <TouchableOpacity onPress={() => addItemToCart(item.id)}>
                                <Icon name="plus" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity
                        style={styles.addToCartButton}
                        onPress={() => addItemToCart(item.id)}>
                        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity
  style={styles.floatingButton}
  onPress={() =>
    navigation.navigate('CartScreen', {
      cart: cart, vendorData 
    })
  }>
  <Text style={styles.floatingButtonText}>
    Continue to Cart ({Object.keys(cart).length} items | {calculateTotalPrice()} INR)
  </Text>
</TouchableOpacity>

  </View>

      {/* Bottom drawer section */}

      <View style={styles.bottomDrawerContainer}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={isBottomSheetOpen}
            onRequestClose={handleCloseBottomSheet}
        >
    
            {selectedItem && (
            <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
                <View style={{ flex: 0, width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Text>{selectedItem.name}</Text>
                <TouchableOpacity onPress={handleCloseBottomSheet} style={styles.close}>
                    <Text>Close</Text>
                </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 16 }}>
                <Image source={{ uri: selectedItem.itemImage }} style={styles.itemImage} />
                <View style={{ opacity: .2, height: 1, borderWidth: 1, borderColor: '#86827e', marginVertical: 16 }} />
                <View style={{ flex: 0, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{selectedItem.name}</Text>
                    <Text>{selectedItem.veg ? ' - Veg' : ' - Non-Veg'}</Text>
                </View>
                <View style={{ paddingTop: 16 }}>
                    <Text>{selectedItem.description}</Text>
                </View>
                <View style={{ paddingTop: 16 }}>
                    <Text>{`₹${selectedItem.price}`}</Text>
                </View>
                </View>
            </View>
            )}
        </Modal>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default VendorDetailPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

  bannerImage: {
    width: 340,
    height: 200,
    borderRadius: 20
  },
  bannerImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  hr: {
    width: 80,
    height: 2,
    backgroundColor: '#594AB5',
    borderRadius: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 20,
    marginRight: 20
  },
  rating: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuItemName: {
    //flex: 1,
    fontSize: 13,
    color: 'black',
  },
  menuItemPrice: {
    fontSize: 13,
    color: 'black',
    marginRight: 10,
  },
  menuItemVeg: {
    fontSize: 16,
    //color: 'black',
    marginTop: 5
  },

  itemImageContainer: {
    marginRight: 10,
    //justifyContent: 'row'
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  vegNonVegIcon: {
    height: 10,
    width: 10
  },
  ratingContainer: {
    backgroundColor: '#D3CCFF',
    width: 340,
    height: 45,
    borderRadius: 18,
    marginTop: -30,
    justifyContent: 'center',
    
    //alignItems: 'center'
  },
  ratingTextContainer: {
    backgroundColor: '#594AB5',
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: 10
  },
   ratingText: {
    fontSize: 8,
    color: 'white',
  },
  searchBarContainer: {
    justifyContent: 'flex-start',
    backgroundColor: '#EFEEEE',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    borderRadius: 30,
    flexDirection: 'row'
  },
  searchBar: {
    marginLeft: 10
  },
  searchIcon: {
    marginLeft: 20,
    alignSelf: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  filterButtonText: {
    color: '#555',
    fontSize: 11,
    fontWeight: 'bold',
  },
  filterButtonTextSelected: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  vegNonVegSelector: {
    height: 16,
    width: 16,
    borderRadius: 2
  },
  vegNonVegBothSelector: {
    height: 16,
    width: 16,
    borderRadius: 2
  },
  filterVegButton: {
    height: 25,
    width: 53,
    backgroundColor: '#D3CCFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row'
 },
 filterNonVegButton: {
    height: 25,
    width: 70,
    backgroundColor: '#D3CCFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row'
 },
 bothFilterButton: {
    height: 25,
    width: 45,
    backgroundColor: '#D3CCFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row'
 },
 itemNamePriceContainer: {
    justifyContent: 'flex-start',
    width: 100,
    flexDirection: 'column',
    marginLeft: -100
    //justifyContent: ''
 },
 floatingButtonContainer: {
    position: 'absolute',
    bottom: 210,
    left: 20,
    right: 20,
  },
  floatingButton: {
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
 bottomDrawerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
    },
    close: {
        backgroundColor: 'black',
        height: 40
    },
    cartButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    filterButtonSelected: {
        backgroundColor: '#594AB5',
    }
});
