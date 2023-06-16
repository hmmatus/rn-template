import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {loggedInOptions} from './config/config';
import Home from 'src/components/screens/home';
import BottomTab from './tabNav';
export type MainRootStack = {
  Tab: undefined;
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNav;
