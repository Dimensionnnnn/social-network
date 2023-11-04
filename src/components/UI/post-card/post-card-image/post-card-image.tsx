import React from 'react';
import {Image, Pressable} from 'react-native';
import {getCardTitleStyles} from './styles';

interface PostCardImageProps {
  photoUrl: string;
  onPress?: () => void;
}

export const PostCardImage: React.FC<PostCardImageProps> = ({
  photoUrl,
  onPress,
}) => {
  const cardImageStyles = getCardTitleStyles();

  return (
    <Pressable style={cardImageStyles.container} onPress={onPress}>
      <Image
        resizeMethod="resize"
        resizeMode="contain"
        source={{uri: photoUrl}}
        style={cardImageStyles.imageSize}
      />
    </Pressable>
  );
};
