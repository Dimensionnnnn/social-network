import React from 'react';
import {Image, Pressable} from 'react-native';
import {getPostCardTitleStyles} from './styles';

interface PostCardImageProps {
  postPhotoUrl: number;
  onPress?: () => void;
}

export const PostCardImage: React.FC<PostCardImageProps> = ({
  postPhotoUrl,
  onPress,
}) => {
  const postCardImageStyles = getPostCardTitleStyles();

  return (
    <Pressable style={postCardImageStyles.container} onPress={onPress}>
      <Image
        resizeMethod="resize"
        resizeMode="contain"
        source={postPhotoUrl}
        style={postCardImageStyles.imageSize}
      />
    </Pressable>
  );
};
