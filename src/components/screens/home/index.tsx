import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Screen from 'src/components/elements/Screen';
import {MainRootStack} from 'src/components/navigation/mainNav';
import MainButton from 'src/components/elements/Button/MainButton';
import {useAppDispatch} from 'src/redux/hooks';
import {setLoggedOut} from 'src/redux/auth/slice';

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
