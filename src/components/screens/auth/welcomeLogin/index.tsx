import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRootStack} from 'src/components/navigation/authNav';
import Screen from 'src/components/elements/Screen';
import {useAppDispatch} from 'src/redux/hooks';
import {setLoggedIn} from 'src/redux/auth/slice';
import MainButton from 'src/components/elements/Button/MainButton';
import {styles} from './styles';
import {Formik} from 'formik';
import MainInput from 'src/components/elements/Form/Input/MainInput';
import {loginValidationSchema} from './config';

interface FormValues {
  username: string;
  password: string;
}
type Props = NativeStackScreenProps<AuthRootStack, 'WelcomeLogin'>;
const WelcomeLogin = ({}: Props) => {
  const dispatch = useAppDispatch();
  const initialValues: FormValues = {username: '', password: ''};

  const handleOnSubmit = values => {
    dispatch(setLoggedIn());
  };
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={loginValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <MainInput
              label="Username"
              name="username"
              value={values.username}
              onChangeText={handleChange('username')}
              errorMessage={errors.username}
              onBlur={handleBlur('username')}
            />
            <MainInput
              label="Password"
              name="password"
              value={values.password}
              onChangeText={handleChange('password')}
              errorMessage={errors.password}
              onBlur={handleBlur('password')}
              secureTextEntry
            />
            <MainButton
              disabled={!isValid}
              text="Next"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default WelcomeLogin;
