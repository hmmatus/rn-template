import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from './redux/hooks';
import AuthNav from './components/navigation/authNav';
import MainNav from './components/navigation/mainNav';

const AppWrapper = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      {!isLoggedIn ? <AuthNav /> : <MainNav />}
    </NavigationContainer>
  );
};

export default AppWrapper;
