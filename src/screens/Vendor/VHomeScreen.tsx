import React from 'react';
import { View, StyleSheet ,FlatList, TouchableOpacity} from 'react-native';
import { Card, Text, Image } from 'react-native-elements';
{/*import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

const MyComponent = () => {
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];

  const handlePress = (item) => {
    console.log('Item ID:', item.id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyComponent;
 */}

const Menu=[
  {  id:1,
     foodName: 'Aloo Paratha',
     foodDesc: 'Aloo paratha with aloo',
     price: '65',
     category: 'veg',
     tag:'#bestseller',
     imageURL:''
  },
  {id:2,
    foodName: 'Gobi Paratha',
    foodDesc: 'Gobi Paratha with Gobi',
    price: '75',
    category: 'veg',
    tag:'',
    imageURL:''
  },
  {  id:3,
    foodName: 'Chicken Paratha',
    foodDesc: 'Chicken Paratha with Chicken',
    price: '95',
    category: 'nonveg',
    tag:'#specialdish',
    imageURL:''
  },
  
  
 ];
 const VHomeScreen = () => {
   const renderItem=({item})=>{
  const onEdit=(item)=> {
    console.log(item.foodName + ' is edited')
  }
  const onDelete=(item)=> {
    console.log(item.foodName + ' is deleted')
  }
  return(
    <>
    <View style={styles.list}>
    {item.category==='veg' ? 
    (<Image style={styles.images} source={require('../../../assets/images/veg.png')}/>):(
    <Image style={styles.images} source={require('../../../assets/images/nonveg.png')}/>
    )}
    <View style={styles.name}>
    <Text >{item.foodName}</Text>
    <Text >₹{item.price}</Text>
    </View>
    <View style={styles.button}>
    <TouchableOpacity onPress={()=>onEdit(item)}><Text style={{color:'blue'}}>Edit</Text></TouchableOpacity>
    <Text> | </Text>
    <TouchableOpacity onPress={()=>onDelete(item)}><Text style={{color:'blue'}}>Delete</Text></TouchableOpacity>
    </View>
    </View>
    <View style={styles.underline}></View>
    </>

    ) 
};
return(
  <FlatList data={Menu} renderItem={renderItem} keyExtractor={(item)=> item.id}/>
)  
}

export default VHomeScreen

const styles = StyleSheet.create({
  images:{
    marginLeft:'10%',
    height:10,
    width:10,
    resizeMode:'contain'
  },
  list:{
    flex:1,
    flexDirection:'row',
    marginTop:'5%',
  },
  button:{
    flex:1,
    flexDirection:'row',
  },
  name:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'

  },
  
  underline: {
    height: 1,
    backgroundColor: 'black',
    marginTop: 10,
    width:'100%'
  },
  
});