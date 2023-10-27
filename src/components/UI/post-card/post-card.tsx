import React, {useState} from 'react';
import {useColorTheme, ColorThemes} from 'src/hooks/useColorTheme';
import {SvgNotFound} from 'src/shared/icons/components/not-found-svg';
import {View} from 'react-native';
import {getPostCardStyles} from './styles';
import {PostCardTitle} from './post-card-title/post-card-title';
import {PostCardImage} from './post-card-image/post-card-image';
import {PostCardFooter} from './post-card-footer/post-card-footer';
import {PostCardDescription} from './post-card-description/post-card-description';

interface PostCardProps {
  postName: string;
  postDateOfCreation: string;
  postDescription: string;
  postPhotoUrl: number;
  postAuthorPhotoUrl: number;
  postAuthorName: string;
  postLikesCount: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  postName,
  postDateOfCreation,
  postDescription,
  postPhotoUrl,
  postAuthorPhotoUrl,
  postAuthorName,
  postLikesCount,
}) => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const themeVariant: ColorThemes = useColorTheme();
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
            postName={postName}
            postDateOfCreation={postDateOfCreation}
            isPostOpen={isPostOpen}
          />
          <PostCardImage postPhotoUrl={postPhotoUrl} onPress={handleOpenPost} />
          <PostCardDescription postDescription={postDescription} />
          <PostCardFooter
            authorName={postAuthorName}
            likesCount={postLikesCount}
            authorPhotoUrl={postAuthorPhotoUrl}
          />
        </>
      ) : (
        <>
          <PostCardTitle
            postName={postName}
            postDateOfCreation={postDateOfCreation}
            isPostOpen={isPostOpen}
          />
          <PostCardImage postPhotoUrl={postPhotoUrl} onPress={handleOpenPost} />
          <PostCardFooter
            authorName={postAuthorName}
            likesCount={postLikesCount}
            authorPhotoUrl={postAuthorPhotoUrl}
          />
        </>
      )}
    </View>
  );
};
