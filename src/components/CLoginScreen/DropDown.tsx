import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const DropDown = ({data = [], value = {}, onSelect = () => {}}) => {
  const [showOption, setShowOption] = useState(false);

  const onSelectedItem = val => {
    setShowOption(false);
    onSelect(val);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={styles.dropDownStyle}
          onPress={() => setShowOption(!showOption)}>
          <Text>{!!value ? value?.name : `Choose your Role`}</Text>
          <Icon name={showOption ? 'caretup' : 'caretdown'} size={16} color="white" />
        </TouchableOpacity>
        {showOption && (
          <View style={styles.dropDownArea}>
            {data.map((val, i) => {
              return (
                <TouchableOpacity
                  key={String(i)}
                  onPress={() => onSelectedItem(val)}
                  style={styles.dropDownMenu}
                  >
                  <Text>{val.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 380,
    backgroundColor: '#594AB5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  dropDownStyle: {
    width: 320,
    height: 70,
    //marginTop: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  dropDownMenu: {
    backgroundColor: 'white',
    padding: 15,
    width: 320,
  },
  dropDownArea: {
    borderRadius: 10,
    //backgroundColor: 'orange'
    marginTop: 5,
    borderTopEndRadius: 20
  },
  fixedButtonContainer: {
    position: 'absolute',
    top: 100,
    width: '100%',
    alignItems: 'center',
  }
});
