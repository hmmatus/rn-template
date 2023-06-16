import React from 'react';
import {SafeAreaView, ViewProps, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  children: JSX.Element;
  style?: ViewStyle;
};
const Screen: React.FC<Props> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Screen;

Screen.defaultProps = {
  children: undefined,
  style: {},
};
