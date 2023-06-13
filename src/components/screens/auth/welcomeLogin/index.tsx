import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRootStack} from '../../../navigation/authNav';
import {Screen} from 'react-native-screens';
import {Text} from 'react-native';

type Props = NativeStackScreenProps<AuthRootStack, 'WelcomeLogin'>;
const WelcomeLogin = ({}: Props) => {
  return (
    <Screen>
      <Text>Login Welcome Screen</Text>
    </Screen>
  );
};

export default WelcomeLogin;
