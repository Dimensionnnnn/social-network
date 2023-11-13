import React from 'react';
import {Text} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {getCardDescriptionStyles} from './styles';

interface PostCardDescriptionProps {
  description: string;
}

export const PostCardDescription: React.FC<PostCardDescriptionProps> = ({
  description,
}) => {
  const themeVariant = useColorTheme();
  const styles = getCardDescriptionStyles(themeVariant);

  return <Text style={styles.descriptionStyles}>{description}</Text>;
};
