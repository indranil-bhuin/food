import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';



const VendorDetailPage = () => {
  const data = {
    vendors: [
      {
        name: 'Parantha Plaza',
        banner_image: 'https://assets.box8.co.in/default-picture-shape/web/product/756',
        rating: 4.5,
        menu: [
          {
            name: 'Aloo Parantha',
            price: 50,
            veg: true,
            itemImage: 'https://www.spiceupthecurry.com/wp-content/uploads/2014/05/aloo-paratha-2.jpg'
          },
          {
            name: 'Paneer Parantha',
            price: 70,
            veg: true,
            itemImage: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2022/03/Paneer-Paratha-Recipe-Step-By-Step-Instructions-scaled.jpg?resize=1024%2C681&quality=65&strip=all&ssl=1'
          },
          {
            name: 'Chicken Parantha',
            price: 120,
            veg: false,
            itemImage: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/chicken-biryani-recipe.jpg'
          },
          {
            name: 'Butter Chicken',
            price: 150,
            veg: false,
            itemImage: 'https://i.ndtvimg.com/i/2016-06/butter-chicken_625x350_71466208091.jpg'
          },
          {
            name: 'Veg Noodles',
            price: 80,
            veg: true,
            itemImage: 'https://www.cookwithmanali.com/wp-content/uploads/2020/01/Vegetable-Noodles-1-500x375.jpg'
          },
          {
            name: 'Egg Fried Rice',
            price: 90,
            veg: false,
            itemImage: 'https://www.thespruceeats.com/thmb/vW8-SKJKdM1cFp-bKtUPwTt0-0I=/4000x2667/filters:no_upscale():max_bytes(150000):strip_icc()/egg-fried-rice-recipe-4050113-hero-01-67907ac9ba1e437d9e452c6d0ea2a758.jpg'
          },
        ],
      },
    ],
  };

  const vendorData = data.vendors[0];
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('All');
  //const [cart, setCart] = useState({});

  const filteredMenu = vendorData.menu.filter((item) => {
    if (filter === 'All') {
      return item.name.toLowerCase().includes(searchText.toLowerCase().trim());
    } else if (filter === 'Veg') {
      return item.veg && item.name.toLowerCase().includes(searchText.toLowerCase().trim());
    } else if (filter === 'NonVeg') {
      return !item.veg && item.name.toLowerCase().includes(searchText.toLowerCase().trim());
    }
  });

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
                style={[styles.filterButton, filter === 'All' && styles.filterButtonSelected]}>
                <Text style={[styles.filterButtonText, filter === 'All' && styles.filterButtonTextSelected]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setFilter('Veg')}
                style={[styles.filterButton, filter === 'Veg' && styles.filterButtonSelected]}>
                <Text style={[styles.filterButtonText, filter === 'Veg' && styles.filterButtonTextSelected]}>Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setFilter('NonVeg')}
                style={[styles.filterButton, filter === 'NonVeg' && styles.filterButtonSelected]}>
                <Text style={[styles.filterButtonText, filter === 'NonVeg' && styles.filterButtonTextSelected]}>NonVeg</Text>
            </TouchableOpacity>
        </View>
      
      <View style={styles.contentContainer}>
          <Text style={styles.menuTitle}>
            Menu ({filteredMenu.length} items):
          </Text>
          {filteredMenu.map((item, index) => (
            <View style={styles.menuItemContainer} key={index}>
              <View style={styles.itemImageContainer}>
                <Image
                  source={{ uri: item.itemImage }}
                  style={styles.itemImage}
                />
              </View>
              <Text style={styles.menuItemName}>{item.name}</Text>
              <Text style={styles.menuItemPrice}>{`₹${item.price}`}</Text>
            <Text style={styles.menuItemVeg}>{item.veg ? <Image source={require('../../../assets/images/veg.png')} style={styles.vegNonVegIcon} /> : <Image source={require('../../../assets/images/nonveg.png')} style={styles.vegNonVegIcon} />}</Text>
          </View>
        ))}
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
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  menuItemPrice: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  menuItemVeg: {
    fontSize: 16,
    color: 'black',
  },

  itemImageContainer: {
    marginRight: 10
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  filterButtonText: {
    color: '#555',
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterButtonTextSelected: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
