import React from 'react';
import {Text} from 'react-native';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {getPostCardDescriptionStyles} from './styles';

interface PostCardDescriptionProps {
  postDescription: string;
}

export const PostCardDescription: React.FC<PostCardDescriptionProps> = ({
  postDescription,
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const postCardDescriptionStyles = getPostCardDescriptionStyles(themeVariant);

  return (
    <Text
      style={[
        postCardDescriptionStyles.container,
        postCardDescriptionStyles.fontText,
        postCardDescriptionStyles.textColor,
      ]}>
      {postDescription}
    </Text>
  );
};
