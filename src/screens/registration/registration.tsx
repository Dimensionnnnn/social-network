import {Input} from 'src/components/UI/input/default-input/default-input';
import React from 'react';
import {Text, View} from 'react-native';
import {Button as LogInButton} from 'src/components/UI/button/text-button/text-button';
import {Button as RegistrationButton} from 'src/components/UI/button/default-button/default-button';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getLoginScreenStyles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParamList} from 'src/types/navigation-types/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {USER_SIGN_UP} from 'src/services/queries';
import {useMutation} from '@apollo/client';

interface RegistrationScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Registration'>;
}

interface SubmitProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegistrationScreen = ({navigation}: RegistrationScreenProps) => {
  const [userSignUp, {data, loading, error}] = useMutation(USER_SIGN_UP);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = async (dataSubmit: SubmitProps) => {
    await userSignUp({
      variables: {
        input: {
          email: dataSubmit.email,
          password: dataSubmit.password,
          passwordConfirm: dataSubmit.passwordConfirm,
        },
      },
    });
  };

  const themeVariant: ColorThemes = useColorTheme();
  const styles = getLoginScreenStyles(themeVariant);
  return (
    <View style={[styles.container, styles.containerBackground]}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Text style={[styles.fontTitle, styles.titleColor]}>Join us</Text>
          <Text style={[styles.fontText, styles.textColor]}>
            You will be able to fully communicate
          </Text>
        </View>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="E-mail"
              placeholder="Enter your e-mail"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              isPassword
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Confirm password"
              placeholder="Confirm your password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              isPassword
            />
          )}
          name="passwordConfirm"
        />
      </View>
      <View style={styles.containerButton}>
        <View style={styles.containerHaveAccount}>
          <Text style={[styles.fontText, styles.textColor]}>
            Already have an account?
          </Text>
          <View>
            <LogInButton
              title="Log in"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
        <RegistrationButton
          title="Continue"
          buttonSize="large"
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
        />
      </View>
    </View>
  );
};
