import React from 'react';
import {getCardTitleStyles} from './styles';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {Text, View} from 'react-native';

interface PostCardTitleProps {
  name: string;
  dateOfCreation: string;
  isPostOpen: boolean;
}

export const PostCardTitle: React.FC<PostCardTitleProps> = ({
  name,
  dateOfCreation,
  isPostOpen,
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const cardTitleStyles = getCardTitleStyles(themeVariant, isPostOpen);
  return (
    <View
      style={[cardTitleStyles.container, cardTitleStyles.containerPostOpen]}>
      {!isPostOpen && (
        <Text style={[cardTitleStyles.fontName, cardTitleStyles.colorName]}>
          {name}
        </Text>
      )}
      <Text style={[cardTitleStyles.fontDate, cardTitleStyles.colorDate]}>
        {dateOfCreation}
      </Text>
    </View>
  );
};
