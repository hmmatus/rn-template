import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRootStack} from '../../../navigation/authNav';
import Screen from '../../../elements/Screen';
import {useAppDispatch} from '../../../../redux/hooks';
import {setLoggedIn} from '../../../../redux/auth/slice';
import MainButton from '../../../elements/Button/MainButton';

type Props = NativeStackScreenProps<AuthRootStack, 'WelcomeLogin'>;
const WelcomeLogin = ({}: Props) => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setLoggedIn());
  };
  return (
    <Screen>
      <MainButton text="Iniciar sesion" onPress={handlePress} />
    </Screen>
  );
};

export default WelcomeLogin;
