import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import React, {useState} from 'react';
import {Text, TextInput, View, TextInputProps, Pressable} from 'react-native';
import {getInputStyles} from './styles';
import {SvgProps} from 'react-native-svg';
import {SvgPasswordShow} from 'src/shared/icons/components/password-show-svg';
import {SvgPasswordHide} from 'src/shared/icons/components/password-hide-svg';

interface InputProps extends TextInputProps {
  label?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  isPassword?: boolean;
  SuccessIcon?: (props: SvgProps) => JSX.Element;
}

export const Input: React.FC<InputProps> = ({
  label,
  isDisabled,
  isSuccess,
  isError,
  errorMessage,
  isPassword,
  SuccessIcon,
  ...props
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const themeVariant = useColorTheme();

  const inputStyles = getInputStyles({
    themeVariant,
    isTyping,
    isFilled,
    isDisabled,
    isSuccess,
    isError,
    isPassword,
  });

  const handleFocus = () => {
    setIsTyping(!isTyping);
  };

  const handleEndEdit = () => {
    setIsTyping(false);
    setIsFilled(!isFilled);
  };

  const handlePasswordHide = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <View style={inputStyles.container}>
      <Text style={[inputStyles.labelFont, inputStyles.label]}>{label}</Text>
      <TextInput
        style={[inputStyles.inputTextColor, inputStyles.containerInput]}
        onFocus={handleFocus}
        onEndEditing={handleEndEdit}
        editable={!isDisabled}
        secureTextEntry={isPassword ? isPasswordHidden : false}
        {...props}
      />
      {isSuccess && SuccessIcon && (
        <SuccessIcon style={inputStyles.iconContainer} />
      )}
      {isPassword && (
        <Pressable
          onPress={handlePasswordHide}
          style={inputStyles.iconContainer}>
          {isPasswordHidden ? (
            <SvgPasswordHide color={inputStyles.iconColor} />
          ) : (
            <SvgPasswordShow color={inputStyles.iconColor} />
          )}
        </Pressable>
      )}
      {isError && (
        <Text style={[inputStyles.errorContainer, inputStyles.errorFont]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
