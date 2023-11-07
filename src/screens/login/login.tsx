import React from 'react';
import {Input} from 'src/components/UI/input/default-input/default-input';
import {Text, View} from 'react-native';
import {Button as RegistrationButton} from 'src/components/UI/button/text-button/text-button';
import {Button as LogInButton} from 'src/components/UI/button/default-button/default-button';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {getLoginScreenStyles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParamList} from 'src/routes/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useUserSignIn} from 'src/api/user/gql/mutations/__generated__/user-signin.mutation';
import {useAuth} from 'src/hooks/authentication/useAuth';
import {validateEmail, validatePassword} from 'src/utils/validation';
import {showToast} from 'src/utils/serverError';

interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

interface SubmitProps {
  email: string;
  password: string;
}

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [userSignIn, {loading}] = useUserSignIn();
  const {authenticate} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (dataSubmit: SubmitProps) => {
    try {
      const response = await userSignIn({
        variables: {
          input: {
            email: dataSubmit.email,
            password: dataSubmit.password,
          },
        },
      });

      if (response.data?.userSignIn?.problem) {
        showToast({message: response.data?.userSignIn?.problem.message});
      } else if (response.data?.userSignIn?.token) {
        authenticate(response.data.userSignIn.token);
      }
    } catch (e) {
      showToast();
      console.log(e);
    }
  };

  const themeVariant = useColorTheme();
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
          rules={{required: true, validate: validateEmail}}
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
          rules={{required: true, validate: validatePassword}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              isPassword
              isError={!!errors.password}
              errorMessage={errors.password?.message}
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
