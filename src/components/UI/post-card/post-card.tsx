import React from 'react';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {View} from 'react-native';
import {getPostCardStyles} from './styles';
import {PostCardTitle} from './post-card-title/post-card-title';
import {PostCardImage} from './post-card-image/post-card-image';
import {PostCardFooter} from './post-card-footer/post-card-footer';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList, RouteNames} from 'src/routes/routes';

interface PostCardProps {
  postId: string;
  title: string;
  createdAt: string;
  description: string;
  mediaUrl: string;
  avatarUrl?: string;
  authorName?: string;
  isLiked?: boolean;
  likesCount: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  postId,
  title,
  createdAt,
  description,
  mediaUrl,
  avatarUrl,
  authorName,
  isLiked,
  likesCount,
}) => {
  const themeVariant = useColorTheme();
  const postCardStyles = getPostCardStyles(themeVariant);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleOpenPost = () => {
    navigation.navigate(RouteNames.OPEN_POST, {
      postId: postId,
      title: title,
      createdAt: createdAt,
      description: description,
      mediaUrl: mediaUrl,
      avatarUrl: avatarUrl,
      authorName: authorName,
      isLiked: isLiked,
      likesCount: likesCount,
    });
  };

  return (
    <View style={[postCardStyles.container, postCardStyles.cardBakground]}>
      <PostCardTitle name={title} dateOfCreation={createdAt} />
      <PostCardImage photoUrl={mediaUrl} onPress={handleOpenPost} />
      <PostCardFooter
        postId={postId}
        authorName={authorName ? authorName : 'User'}
        likesCount={likesCount}
        isLiked={isLiked}
        authorPhotoUrl={avatarUrl}
      />
    </View>
  );
};
