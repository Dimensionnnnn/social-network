import React from 'react';
import {Input} from 'src/components/UI/input/default-input/default-input';
import {ScrollView, Text, View} from 'react-native';
import {Button as LogInButton} from 'src/components/UI/button/text-button/text-button';
import {Button as RegistrationButton} from 'src/components/UI/button/default-button/default-button';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getLoginScreenStyles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParamList} from 'src/routes/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {useUserSignUp} from 'src/api/user/gql/mutations/__generated__/user-signup.mutation';
import {useAuth} from 'src/hooks/useAuth';
import {validateEmail, validatePassword} from 'src/utils/validation';
import {useToast} from 'react-native-toast-notifications';
import {setToastFunction, showServerError} from 'src/utils/serverError';

interface RegistrationScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Registration'>;
}

interface SubmitProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegistrationScreen = ({navigation}: RegistrationScreenProps) => {
  const [userSignUp, {loading}] = useUserSignUp();
  const {authenticate} = useAuth();

  const toast = useToast();
  setToastFunction(toast.show);

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
    try {
      const respone = await userSignUp({
        variables: {
          input: {
            email: dataSubmit.email,
            password: dataSubmit.password,
            passwordConfirm: dataSubmit.passwordConfirm,
          },
        },
      });

      if (respone.data?.userSignUp?.problem) {
        showServerError(respone.data?.userSignUp?.problem.message);
      } else if (respone.data?.userSignUp?.token) {
        authenticate(respone.data.userSignUp.token);
      }
    } catch (e) {
      showServerError();
      console.log(e);
    }
  };

  const themeVariant: ColorThemes = useColorTheme();
  const styles = getLoginScreenStyles(themeVariant);
  return (
    <ScrollView
      style={styles.containerBackground}
      contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.containerTitle}>
          <Text style={[styles.fontTitle, styles.titleColor]}>Join us</Text>
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
              isError={!!errors.password}
              errorMessage={errors.password?.message}
              isPassword
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{required: true, validate: validatePassword}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="Confirm password"
              placeholder="Confirm your password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              isError={!!errors.passwordConfirm}
              errorMessage={errors.passwordConfirm?.message}
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
    </ScrollView>
  );
};
