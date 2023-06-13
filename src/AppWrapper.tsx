import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from './redux/hooks';
import {View} from 'react-native';
import AuthNav from './components/navigation/authNav';

const AppWrapper = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNav /> : <View />}
    </NavigationContainer>
  );
};

export default AppWrapper;
