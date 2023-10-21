import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import React, {useState} from 'react';
import {Text, TextInput, View, TextInputProps} from 'react-native';
import {getInputStyles} from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  isDisabled,
  isSuccess,
  isError,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const themeVariant: ColorThemes = useColorTheme();

  const inputStyles = getInputStyles(
    themeVariant,
    isFocus,
    isFilled,
    isDisabled,
    isSuccess,
    isError,
  );

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleEndEdit = () => {
    setIsFocus(false);
    setIsFilled(!isFilled);
  };

  return (
    <View style={inputStyles.container}>
      <Text style={[inputStyles.labelFont, inputStyles.label]}>{label}</Text>
      <TextInput
        style={inputStyles.inputText}
        onFocus={handleFocus}
        onEndEditing={handleEndEdit}
        editable={!isDisabled}
        {...props}
      />
    </View>
  );
};
