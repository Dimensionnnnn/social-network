import React from 'react';
import {Text} from 'react-native';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getCardDescriptionStyles} from './styles';

interface PostCardDescriptionProps {
  description: string;
}

export const PostCardDescription: React.FC<PostCardDescriptionProps> = ({
  description,
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const styles = getCardDescriptionStyles(themeVariant);

  return <Text style={styles.descriptionStyles}>{description}</Text>;
};
