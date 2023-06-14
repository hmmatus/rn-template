import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Screen from '../../elements/Screen';
import {Text} from 'react-native';
import {MainRootStack} from '../../navigation/mainNav';
import MainButton from '../../elements/Button/MainButton';
import {useAppDispatch} from '../../../redux/hooks';
import {setLoggedIn, setLoggedOut} from '../../../redux/auth/slice';

type Props = NativeStackScreenProps<MainRootStack, 'Home'>;
const Home = ({}: Props) => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setLoggedOut());
  };
  return (
    <Screen>
      <MainButton text="Cerrar sesion" onPress={handlePress} />
    </Screen>
  );
};

export default Home;
