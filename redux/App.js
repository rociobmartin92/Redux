/* eslint-disable prettier/prettier */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Counter from './components';
import {Provider} from 'react-redux';
import store from './redux/store/index';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Counter />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
