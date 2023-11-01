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
  name: string;
  dateOfCreation: string;
  description: string;
  photoUrl: number;
  authorPhotoUrl: number;
  authorName: string;
  likesCount: number;
}

export const PostCard: React.FC<PostCardProps> = ({
  name,
  dateOfCreation,
  description,
  photoUrl,
  authorPhotoUrl,
  authorName,
  likesCount,
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
            name={name}
            dateOfCreation={dateOfCreation}
            isPostOpen={isPostOpen}
          />
          <PostCardImage photoUrl={photoUrl} onPress={handleOpenPost} />
          <PostCardDescription description={description} />
          <PostCardFooter
            authorName={authorName}
            likesCount={likesCount}
            authorPhotoUrl={authorPhotoUrl}
          />
        </>
      ) : (
        <>
          <PostCardTitle
            name={name}
            dateOfCreation={dateOfCreation}
            isPostOpen={isPostOpen}
          />
          <PostCardImage photoUrl={photoUrl} onPress={handleOpenPost} />
          <PostCardFooter
            authorName={authorName}
            likesCount={likesCount}
            authorPhotoUrl={authorPhotoUrl}
          />
        </>
      )}
    </View>
  );
};
