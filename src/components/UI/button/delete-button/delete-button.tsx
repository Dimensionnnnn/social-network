import React from 'react';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {Text, Pressable} from 'react-native';
import {SvgTrashIcon} from 'src/shared/icons/components/trash-svg';
import {getButtonStyles} from './styles';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  const themeVariant = useColorTheme();
  const buttonStyles = getButtonStyles(themeVariant);

  return (
    <Pressable style={buttonStyles.container} onPress={onPress}>
      <SvgTrashIcon color={buttonStyles.iconColor} />
      <Text style={[buttonStyles.fontText, buttonStyles.textColor]}>
        {title}
      </Text>
    </Pressable>
  );
};
