import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainButton from 'src/components/elements/Button/MainButton';
import Screen from 'src/components/elements/Screen';
import {BottomRootTab} from 'src/components/navigation/tabNav';
import {setLoggedOut} from 'src/redux/auth/slice';
import {useAppDispatch} from 'src/redux/hooks';

type Props = BottomTabScreenProps<BottomRootTab, 'Settings'>;

const Settings = ({}: Props) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setLoggedOut());
  };
  return (
    <Screen>
      <>
        <MainButton text="Logout" onPress={handleLogout} />
      </>
    </Screen>
  );
};

export default Settings;
