import React from 'react';
import {SvgShare} from 'src/shared/icons/components/share-svg';
import {SvgHeart} from 'src/shared/icons/components/heart-svg';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {Image, Text, View} from 'react-native';
import {getCardFooterStyles} from './styles';
import {Button} from 'src/components/UI/button/button-icon/button-icon';

interface PostCardFooterProps {
  authorName: string;
  likesCount: number;
  authorPhotoUrl: number;
}

export const PostCardFooter: React.FC<PostCardFooterProps> = ({
  authorName,
  likesCount,
  authorPhotoUrl,
}) => {
  const themeVariant: ColorThemes = useColorTheme();
  const cardFooterStyles = getCardFooterStyles(themeVariant);

  return (
    <View style={cardFooterStyles.container}>
      <View style={cardFooterStyles.containerAuthorInfo}>
        <View style={cardFooterStyles.containerImage}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            source={authorPhotoUrl}
            style={cardFooterStyles.imageSize}
          />
        </View>
        <Text
          style={[cardFooterStyles.fontText, cardFooterStyles.primaryColor]}>
          {authorName}
        </Text>
      </View>
      <View style={cardFooterStyles.containerButtons}>
        <View style={cardFooterStyles.containerLikes}>
          <Button isDefaultIcon Icon={SvgHeart} />
          <Text
            style={[
              cardFooterStyles.fontText,
              cardFooterStyles.secondaryColor,
            ]}>
            {likesCount}
          </Text>
        </View>
        <Button isDefaultIcon Icon={SvgShare} />
      </View>
    </View>
  );
};
