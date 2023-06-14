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
