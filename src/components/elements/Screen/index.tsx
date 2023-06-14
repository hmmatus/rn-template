import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';

type Props = {
  children: JSX.Element;
};
const Screen: React.FC<Props> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Screen;
