import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const authOptions = ({
  navigation,
  route,
}): NativeStackNavigationOptions => ({
  headerBackButtonMenuEnabled: true,
  headerTitle: '',
});

export const loggedInOptions = ({
  navigation,
  route,
}): NativeStackNavigationOptions => ({
  headerBackButtonMenuEnabled: true,
  headerTitle: '',
});

export const tabNavOptions = ({}): BottomTabNavigationOptions => ({
  headerShown: false,
});
