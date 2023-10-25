import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import React, {useState} from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';
import {getInputStyles} from './styles';
import {SvgProps} from 'react-native-svg';

interface InputProps extends TextInputProps {
  label?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  SuccessIcon?: (props: SvgProps) => JSX.Element;
}

export const Input: React.FC<InputProps> = ({
  label,
  isDisabled,
  isSuccess,
  isError,
  SuccessIcon,
  ...props
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const themeVariant: ColorThemes = useColorTheme();

  const inputStyles = getInputStyles({
    themeVariant,
    isTyping,
    isFilled,
    isDisabled,
    isSuccess,
    isError,
  });

  const handleFocus = () => {
    setIsTyping(!isTyping);
  };

  const handleEndEdit = () => {
    setIsTyping(false);
    setIsFilled(!isFilled);
  };

  return (
    <View style={inputStyles.container}>
      <Text style={[inputStyles.labelFont, inputStyles.label]}>{label}</Text>
      <TextInput
        style={inputStyles.inputTextColor}
        onFocus={handleFocus}
        onEndEditing={handleEndEdit}
        editable={!isDisabled}
        {...props}
      />
      {isSuccess && SuccessIcon && (
        <SuccessIcon style={inputStyles.iconContainer} />
      )}
    </View>
  );
};
