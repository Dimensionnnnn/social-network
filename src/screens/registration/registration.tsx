import {Input} from 'src/components/UI/input/default-input/default-input';
import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button as LogInButton} from 'src/components/UI/button/text-button/text-button';
import {Button as RegistrationButton} from 'src/components/UI/button/default-button/default-button';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getLoginScreenStyles} from './styles';
import {useForm, Controller} from 'react-hook-form';
import {RootStackParamList} from 'src/routes/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {USER_SIGN_UP} from 'src/api/user/gql/mutations/userMutations';
import {useMutation} from '@apollo/client';
import {AuthContext, AuthContextProps} from 'src/context/auth-context';

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
  const {authenticate} = useContext<AuthContextProps>(AuthContext);
  const {
    control,
    handleSubmit,
    setError,
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
      await userSignUp({
        variables: {
          input: {
            email: dataSubmit.email,
            password: dataSubmit.password,
            passwordConfirm: dataSubmit.passwordConfirm,
          },
        },
      }).then(response => {
        if (response.data?.userSignUp?.problem) {
          setError('email', {
            type: 'manual',
            message: response.data.userSignUp.problem.message,
          });
          setError('password', {
            type: 'manual',
            message: response.data.userSignUp.problem.message,
          });
          setError('passwordConfirm', {
            type: 'manual',
            message: response.data.userSignUp.problem.message,
          });
        } else if (response.data?.userSignUp?.token) {
          authenticate(response.data.userSignUp.token);
        }
      });
    } catch (e) {
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
              isError={!!errors.password}
              errorMessage={errors.password?.message}
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
