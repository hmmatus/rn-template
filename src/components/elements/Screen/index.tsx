import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  children: JSX.Element;
};
const Screen: React.FC<Props> = ({children}) => {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
};

export default Screen;
