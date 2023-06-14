import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeLogin from 'src/components/screens/auth/welcomeLogin';
import {authOptions} from './config/config';
export type AuthRootStack = {
  WelcomeLogin: undefined;
};
const Stack = createNativeStackNavigator<AuthRootStack>();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={({navigation, route}) =>
          authOptions({navigation, route})
        }>
        <Stack.Screen name="WelcomeLogin" component={WelcomeLogin} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNav;
