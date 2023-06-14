import {FormControl, Input} from 'native-base';
import React from 'react';
import {TextInputProps, Text} from 'react-native';
import {styles} from './styles';
interface Props extends TextInputProps {
  label: string;
  name: string;
  errorMessage?: string;
  helperText?: string;
  required?: boolean;
}

const MainInput: React.FC<Props> = props => {
  const {label, errorMessage, helperText, required} = props;
  return (
    <FormControl isRequired={required}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input {...props} />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
    </FormControl>
  );
};

export default MainInput;
