import {Formik} from 'formik';
import {FormControl} from 'native-base';
import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
interface Props extends TextInputProps {
  label: string;
  errorMessage?: string;
  helperText?: string;
}

const MainInput: React.FC<Props> = props => {
  const {label, errorMessage, helperText} = props;
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <TextInput {...props} />
      {helperText && !errorMessage && (
        <FormControl.HelperText>{helperText}</FormControl.HelperText>
      )}
      {errorMessage && (
        <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};
