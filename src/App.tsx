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

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

export default App;
