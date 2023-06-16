import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthRootStack} from 'src/components/navigation/authNav';
import Screen from 'src/components/elements/Screen';
import {useAppDispatch} from 'src/redux/hooks';
import {setLoggedIn} from 'src/redux/auth/slice';
import MainButton from 'src/components/elements/Button/MainButton';
import {styles} from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import MainInput from 'src/components/elements/Form/Input/MainInput';
import {loginValidationSchema} from './config';
import {Controller, useForm} from 'react-hook-form';
import {API_URL} from '@env';

interface FormValues {
  username: string;
  password: string;
}
type Props = NativeStackScreenProps<AuthRootStack, 'WelcomeLogin'>;
const WelcomeLogin = ({}: Props) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(loginValidationSchema),
    mode: 'onChange',
  });

  const handleOnSubmit = () => {
    dispatch(setLoggedIn());
  };
  return (
    <Screen style={styles.container}>
      <>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value, name}}) => (
            <MainInput
              label="Username"
              name="username"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.username?.message}
              onBlur={onBlur}
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          name="password"
          rules={{required: true}}
          render={({field: {onChange, onBlur, value, name}}) => (
            <MainInput
              label="Password"
              name="password"
              value={value}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
              onBlur={onBlur}
              secureTextEntry
            />
          )}
        />
        <MainButton
          disabled={!isValid}
          text="Next"
          onPress={handleSubmit(handleOnSubmit)}
        />
      </>
    </Screen>
  );
};

export default WelcomeLogin;
