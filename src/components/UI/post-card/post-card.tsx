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
  title: string;
  createdAt: string;
  description: string;
  mediaUrl: string;
  avatarUrl?: string;
  authorName?: string;
  likesCount: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  createdAt,
  description,
  mediaUrl,
  avatarUrl,
  authorName,
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
            authorName={authorName ? authorName : 'User'}
            likesCount={likesCount}
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
            authorName={authorName ? authorName : 'User'}
            likesCount={likesCount}
            authorPhotoUrl={avatarUrl}
          />
        </>
      )}
    </View>
  );
};
