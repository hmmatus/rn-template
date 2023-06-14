import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
type Props = {
  onPress(): void;
  text: string;
};
const MainButton: React.FC<Props> = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
