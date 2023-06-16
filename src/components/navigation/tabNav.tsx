import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {tabNavOptions} from './config/config';

export type BottomRootTab = {
  Home: undefined;
};
const Tab = createBottomTabNavigator<BottomRootTab>();

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Group screenOptions={tabNavOptions}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Group>
  </Tab.Navigator>
);

export default BottomTab;
