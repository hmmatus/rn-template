/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppWrapper from './AppWrapper';
import {NativeBaseProvider} from 'native-base';
import {theme} from './styles/theme';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <AppWrapper />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
