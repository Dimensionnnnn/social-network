import React from 'react';
import {HeaderPost} from './header-post/header-post';
import {View} from 'react-native';
import {PostCardTitle} from 'src/components/UI/post-card/post-card-title/post-card-title';
import {PostCardImage} from 'src/components/UI/post-card/post-card-image/post-card-image';
import {PostCardDescription} from 'src/components/UI/post-card/post-card-description/post-card-description';
import {PostCardFooter} from 'src/components/UI/post-card/post-card-footer/post-card-footer';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {getPostOpenStyles} from './styles';
import {RootStackParamList, RouteNames} from 'src/routes/routes';

export const Post = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, RouteNames.POST>>();
  const themeVariant = useColorTheme();
  const styles = getPostOpenStyles(themeVariant);

  const {
    postId,
    title,
    createdAt,
    description,
    mediaUrl,
    authorName,
    isLiked,
    likesCount,
    avatarUrl,
  } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, styles.containerBackground]}>
      <HeaderPost title={title} goBack={handleGoBack} />
      <View style={styles.wrapper}>
        <PostCardTitle name={title} dateOfCreation={createdAt} isPostOpen />
        <PostCardImage photoUrl={mediaUrl} />
        <PostCardDescription description={description} />
        <PostCardFooter
          postId={postId}
          authorName={authorName ? authorName : 'User'}
          likesCount={likesCount}
          isLiked={isLiked}
          authorPhotoUrl={avatarUrl}
        />
      </View>
    </View>
  );
};
