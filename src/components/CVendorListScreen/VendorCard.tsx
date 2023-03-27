import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Image } from 'react-native-elements';

const Vendors = [
 {  id:1,
    vendorName: 'Parantha Plaza',
    avatar: 'https://images.aws.nestle.recipes/resized/dec8f010bb75b95a0aa201c894a2981b_Aamti-Dal-Parantha_1500_700.jpg',
    avgWaitTime: '25 - 35 min',
    avgRating: '4.6'
 },
 {id:2,
    vendorName: 'Mars Corner',
    avatar: 'https://www.licious.in/blog/wp-content/uploads/2019/12/Sunday-Roast-Chicken-Whole-750x750.jpg',
    avgWaitTime: '25 - 35 min',
    avgRating: '4.6'
 },
 {  id:3,
    vendorName: 'Thoda Aur',
    avatar: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/05/16/205678.jpg',
    avgWaitTime: '25 - 35 min',
    avgRating: '4.6'
 },
 {  id:4,
    vendorName: 'Prayagraj Mess',
    avatar: 'https://myheartbeets.com/wp-content/uploads/2021/01/thali-picture.jpg',
    avgWaitTime: '25 - 35 min',
    avgRating: '4.8'
 },
 {  id:5,
    vendorName: 'Donne Biriyani',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    avgWaitTime: '25 - 35 min',
    avgRating: '4.6'
 },
];

const VendorCard = () => {
    const vendorCard=Vendors.map((vendor,index) => (
        <View key={index}>
            <Card style={styles.cardListt}>
                <View style={styles.cardList}>
                    <View style={styles.vendorImageContainer}>
                        <Image source={{ uri: vendor.avatar }} style={styles.image} />
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{vendor.vendorName}</Text>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingText}>{vendor.avgRating}</Text>
                        </View>
                        <Text style={styles.timeText}>{vendor.avgWaitTime}</Text>
                    </View>
                </View>
            </Card>
        </View>
      ))

  return (
    vendorCard
  );
};

const styles = StyleSheet.create({

  image: {
    width: '100%',
    height: 60,
    width: 60,
    resizeMode: 'cover',
    borderRadius: 6
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  cardList: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    borderRadius: 10,
  },
  cardListt: {
    borderRadius: 10,
  },
  cardListContainer: {
    width: 340
  },
  vendorImageContainer: {
    justifyContent: 'center',
    width: 80
  },
  ratingText: {
    fontSize: 8,
    color: 'white',
  },
  detailsContainer: {
    justifyContent: 'center',
    //marginTop: 5
  },
  timeText: {
    fontSize: 13
  },
  ratingContainer: {
    backgroundColor: '#594AB5',
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  }
});

export default VendorCard;
