import React, {useState} from 'react';
import {useColorTheme} from 'src/hooks/useColorTheme';
import {SvgNotFound} from 'src/shared/icons/components/not-found-svg';
import {View} from 'react-native';
import {getPostCardStyles} from './styles';
import {PostCardTitle} from './post-card-title/post-card-title';
import {PostCardImage} from './post-card-image/post-card-image';
import {PostCardFooter} from './post-card-footer/post-card-footer';
import {PostCardDescription} from './post-card-description/post-card-description';

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
  const [isPostOpen, setIsPostOpen] = useState(false);
  const themeVariant = useColorTheme();
  const postCardStyles = getPostCardStyles(themeVariant, isPostOpen);

  const handleOpenPost = () => {
    setIsPostOpen(prevState => !prevState);
  };

  return (
    <View
      style={[
        postCardStyles.container,
        isPostOpen && postCardStyles.postOpenContainer,
        !isPostOpen && postCardStyles.cardBakground,
      ]}>
      {isPostOpen ? (
        <>
          <PostCardTitle
            name={title}
            dateOfCreation={createdAt}
            isPostOpen={isPostOpen}
          />
          <PostCardImage photoUrl={mediaUrl} onPress={handleOpenPost} />
          <PostCardDescription description={description} />
          <PostCardFooter
            postId={postId}
            authorName={authorName ? authorName : 'User'}
            likesCount={likesCount}
            isLiked={isLiked}
            authorPhotoUrl={avatarUrl}
          />
        </>
      ) : (
        <>
          <PostCardTitle
            name={title}
            dateOfCreation={createdAt}
            isPostOpen={isPostOpen}
          />
          <PostCardImage photoUrl={mediaUrl} onPress={handleOpenPost} />
          <PostCardFooter
            postId={postId}
            authorName={authorName ? authorName : 'User'}
            likesCount={likesCount}
            isLiked={isLiked}
            authorPhotoUrl={avatarUrl}
          />
        </>
      )}
    </View>
  );
};
