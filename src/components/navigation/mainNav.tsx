import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {loggedInOptions} from './config/config';
import BottomTab from './tabNav';
import PokemonDetail from '../screens/pokemonDetail';
import {PokemonP} from 'src/models/pokemon.model';
export type MainRootStack = {
  Tab: undefined;
  PokemonDetail: {
    item: PokemonP;
  };
};
const Stack = createNativeStackNavigator<MainRootStack>();

const MainNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={({navigation, route}) =>
          loggedInOptions({navigation, route})
        }>
        <Stack.Screen name="Tab" component={BottomTab} />
        <Stack.Screen
          options={({route}) => ({
            headerTitle: route.params.item.name,
          })}
          name="PokemonDetail"
          component={PokemonDetail}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNav;
