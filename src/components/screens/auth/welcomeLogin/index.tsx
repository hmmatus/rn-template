import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRootStack} from 'src/components/navigation/authNav';
import Screen from 'src/components/elements/Screen';
import {useAppDispatch} from 'src/redux/hooks';
import {setLoggedIn} from 'src/redux/auth/slice';
import MainButton from 'src/components/elements/Button/MainButton';

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
