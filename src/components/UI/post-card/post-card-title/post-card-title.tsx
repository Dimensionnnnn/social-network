import React from 'react';
import {getPostCardTitleStyles} from './styles';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {Text, View} from 'react-native';

interface PostCardTitleProps {
  postName: string;
  postDateOfCreation: string;
  isPostOpen: boolean;
}

export const PostCardTitle: React.FC<PostCardTitleProps> = ({
  postName,
  postDateOfCreation,
  isPostOpen,
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const postCardTitleStyles = getPostCardTitleStyles(themeVariant, isPostOpen);
  return (
    <View
      style={[
        postCardTitleStyles.container,
        postCardTitleStyles.containerPostOpen,
      ]}>
      {!isPostOpen && (
        <Text
          style={[
            postCardTitleStyles.fontPostName,
            postCardTitleStyles.colorPostName,
          ]}>
          {postName}
        </Text>
      )}
      <Text
        style={[
          postCardTitleStyles.fontPostDate,
          postCardTitleStyles.colorPostDate,
        ]}>
        {postDateOfCreation}
      </Text>
    </View>
  );
};
