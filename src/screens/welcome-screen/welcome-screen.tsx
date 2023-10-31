import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button as RegistrationButton} from 'src/components/UI/button/default-button/default-button';
import {Button as LogInButton} from 'src/components/UI/button/text-button/text-button';
import {getWelcomeScreenStyles} from './styles';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {RootStackParamList} from 'src/types/navigation-types/types';

const welcomeImage = require('src\\assets\\images\\welcome.png');

type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
};

export const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const themeVariant: ColorThemes = useColorTheme();
  const styles = getWelcomeScreenStyles(themeVariant);
  return (
    <ImageBackground
      source={welcomeImage}
      resizeMethod="resize"
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textColor]}>
          Already have an accout?
        </Text>
        <View>
          <LogInButton
            title="Log in"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
      <RegistrationButton
        title="Create an account"
        buttonSize="large"
        onPress={() => navigation.navigate('Registration')}
      />
    </ImageBackground>
  );
};
