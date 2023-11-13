import React from 'react';
import {SvgShare} from 'src/shared/icons/components/share-svg';
import {SvgHeart} from 'src/shared/icons/components/heart-svg';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {Image, Text, View} from 'react-native';
import {getCardFooterStyles} from './styles';
import {Button} from 'src/components/UI/button/button-icon/button-icon';
import {UserIcon, UserIconSize} from '../../button/user-icon/user-icon';
import {share} from 'src/utils/share';
import {showToast} from 'src/utils/serverError';
import {useLikePost} from 'src/hooks/posts/useLikePost';
import {useUnlikePost} from 'src/hooks/posts/useUnlikePost';

interface PostCardFooterProps {
  postId: string;
  authorName: string;
  likesCount: number;
  isLiked?: boolean;
  authorPhotoUrl?: string;
}

export const PostCardFooter: React.FC<PostCardFooterProps> = ({
  postId,
  authorName,
  likesCount,
  isLiked,
  authorPhotoUrl,
}) => {
  const themeVariant = useColorTheme();
  const cardFooterStyles = getCardFooterStyles(themeVariant);
  const [isLikedLocal, setIsLikedLocal] = React.useState(isLiked);
  const [likesCountLocal, setLikesCountLocal] = React.useState(likesCount);
  const {postLike, dataLike} = useLikePost(postId);
  const {postUnlike, dataUnlike} = useUnlikePost(postId);

  const ratePost = async () => {
    setIsLikedLocal(!isLikedLocal);
    setLikesCountLocal(prevState =>
      isLikedLocal ? prevState - 1 : prevState + 1,
    );
    try {
      if (!isLikedLocal) {
        await postLike({
          refetchQueries: ['Posts', 'FavouritePosts', 'MyPosts'],
        });

        if (dataLike) {
          setIsLikedLocal(dataLike.postLike.isLiked);
          setLikesCountLocal(dataLike.postLike.likesCount);
        }
      } else {
        await postUnlike({
          refetchQueries: ['Posts', 'FavouritePosts', 'MyPosts'],
        });

        if (dataUnlike) {
          setIsLikedLocal(dataUnlike.postUnlike.isLiked);
          setLikesCountLocal(dataUnlike.postUnlike.likesCount);
        }
      }
    } catch (e) {
      showToast();
    }
  };

  return (
    <View style={cardFooterStyles.container}>
      <View style={cardFooterStyles.containerAuthorInfo}>
        <View style={cardFooterStyles.containerImage}>
          {authorPhotoUrl ? (
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              source={{uri: authorPhotoUrl}}
              style={cardFooterStyles.imageSize}
            />
          ) : (
            <UserIcon size={UserIconSize.VERY_SMALL} />
          )}
        </View>
        <Text
          style={[cardFooterStyles.fontText, cardFooterStyles.primaryColor]}>
          {authorName}
        </Text>
      </View>
      <View style={cardFooterStyles.containerButtons}>
        <View style={cardFooterStyles.containerLikes}>
          <Button
            Icon={SvgHeart}
            onPress={ratePost}
            isLiked={isLikedLocal}
            isLikeButton
          />
          <Text
            style={[
              cardFooterStyles.fontText,
              cardFooterStyles.secondaryColor,
            ]}>
            {likesCountLocal}
          </Text>
        </View>
        <Button Icon={SvgShare} onPress={share} />
      </View>
    </View>
  );
};
