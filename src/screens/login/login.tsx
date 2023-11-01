import {Input} from 'src/components/UI/input/default-input/default-input';
import React from 'react';
import {Text, View} from 'react-native';
import {Button as RegistrationButton} from 'src/components/UI/button/text-button/text-button';
import {Button as LogInButton} from 'src/components/UI/button/default-button/default-button';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getLoginScreenStyles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParamList} from 'src/routes/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {USER_SIGN_IN} from 'src/api/user/gql/mutations/userMutations';
import {useMutation} from '@apollo/client';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

interface SubmitProps {
  email: string;
  password: string;
}

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [userSignIn, {data, loading, error}] = useMutation(USER_SIGN_IN);
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (dataSubmit: SubmitProps) => {
    try {
      await userSignIn({
        variables: {
          input: {
            email: dataSubmit.email,
            password: dataSubmit.password,
          },
        },
      }).then(response => {
        if (response.data?.userSignIn?.problem) {
          setError('email', {
            type: 'manual',
            message: response.data.userSignIn.problem.message,
          });
          setError('password', {
            type: 'manual',
            message: response.data.userSignIn.problem.message,
          });
        } else if (response.data?.userSignIn?.token) {
          console.log(response.data);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const themeVariant: ColorThemes = useColorTheme();
  const styles = getLoginScreenStyles(themeVariant);
  return (
    <View style={[styles.container, styles.containerBackground]}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Text style={[styles.fontTitle, styles.titleColor]}>Log in</Text>
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
              isError={!!errors.email}
              errorMessage={errors.email?.message}
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
              isError={!!errors.email}
              errorMessage={errors.email?.message}
              isPassword
            />
          )}
          name="password"
        />
      </View>
      <View style={styles.containerButton}>
        <View style={styles.containerNoAccount}>
          <Text style={[styles.fontText, styles.textColor]}>No account?</Text>
          <View>
            <RegistrationButton
              title="Register"
              onPress={() => navigation.navigate('Registration')}
            />
          </View>
        </View>
        <LogInButton
          title="Continue"
          buttonSize="large"
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
        />
      </View>
    </View>
  );
};
