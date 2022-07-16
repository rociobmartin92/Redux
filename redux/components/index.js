/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {View, Text, Button} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {add, remove} from '../redux/actions/index';

const Counter = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{fontSize: 25, marginBottom: 10, marginTop: 55, color: 'black'}}>
        Amount
      </Text>
      <View style={{marginBottom: 5, marginTop: 5}}>
        <Button
          color="#841584"
          title="Agregar 10"
          onPress={() => console.log('lkdfjsd')}
        />
      </View>
      <View style={{marginBottom: 5, marginTop: 5}}>
        <Button
          color="#841584"
          title="Remover 10"
          onPress={() => console.log('lkd')}
        />
      </View>
    </View>
  );
};

export default connect(null, {add, remove})(Counter);
