import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeLogin from '../screens/auth/welcomeLogin';
export type AuthRootStack = {
  WelcomeLogin: undefined;
};
const Stack = createNativeStackNavigator<AuthRootStack>();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeLogin" component={WelcomeLogin} />
    </Stack.Navigator>
  );
};

export default AuthNav;
