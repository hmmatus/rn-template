import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import {tabNavOptions} from './config/config';
import Settings from '../screens/settings';

export type BottomRootTab = {
  Home: undefined;
  Settings: undefined;
};
const Tab = createBottomTabNavigator<BottomRootTab>();

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Group screenOptions={tabNavOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Group>
  </Tab.Navigator>
);

export default BottomTab;
