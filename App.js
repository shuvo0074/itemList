import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './app/store';
import RootStack from './app/routes';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </Provider>
);

export default App;
