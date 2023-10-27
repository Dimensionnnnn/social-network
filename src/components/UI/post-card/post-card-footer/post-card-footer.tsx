import React from 'react';
import {SvgShare} from 'src/shared/icons/components/share-svg';
import {SvgHeart} from 'src/shared/icons/components/heart-svg';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {Image, Text, View} from 'react-native';
import {getPostCardFooterStyles} from './styles';
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
  const postCardFooterStyles = getPostCardFooterStyles(themeVariant);

  return (
    <View style={postCardFooterStyles.container}>
      <View style={postCardFooterStyles.containerAuthorInfo}>
        <View style={postCardFooterStyles.containerImage}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            source={authorPhotoUrl}
            style={postCardFooterStyles.imageSize}
          />
        </View>
        <Text
          style={[
            postCardFooterStyles.fontText,
            postCardFooterStyles.primaryColor,
          ]}>
          {authorName}
        </Text>
      </View>
      <View style={postCardFooterStyles.containerButtons}>
        <View style={postCardFooterStyles.containerLikes}>
          <Button isDefaultIcon Icon={SvgHeart} />
          <Text
            style={[
              postCardFooterStyles.fontText,
              postCardFooterStyles.secondaryColor,
            ]}>
            {likesCount}
          </Text>
        </View>
        <Button isDefaultIcon Icon={SvgShare} />
      </View>
    </View>
  );
};
