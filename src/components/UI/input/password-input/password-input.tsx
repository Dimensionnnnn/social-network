import React, {useState} from 'react';
import {Input as DefaultInput} from '../default-input/default-input';
import {Pressable, TextInputProps, View} from 'react-native';
import {SvgPasswordShow} from 'src/shared/icons/components/password-show-svg';
import {SvgPasswordHide} from 'src/shared/icons/components/password-hide-svg';
import {getInputStyles} from './styles';
import {ColorThemes, useColorTheme} from 'src/hooks/useColorTheme';

interface InputProps extends TextInputProps {
  label?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  isDisabled,
  isSuccess,
  isError,
  //   errorMessage,
  ...props
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const inputStyles = getInputStyles({
    themeVariant,
  });

  const handlePasswordHide = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <View style={inputStyles.container}>
      <DefaultInput
        label={label}
        isDisabled={isDisabled}
        isSuccess={isSuccess}
        isError={isError}
        secureTextEntry={isPasswordHidden}
        {...props}
      />
      <Pressable onPress={handlePasswordHide} style={inputStyles.iconContainer}>
        {isPasswordHidden ? (
          <SvgPasswordHide color={inputStyles.iconColor} />
        ) : (
          <SvgPasswordShow color={inputStyles.iconColor} />
        )}
      </Pressable>
    </View>
  );
};
