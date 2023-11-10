import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {SvgArrowLeft} from 'src/shared/icons/components/arrow-left-svg';
import {SvgXMark} from 'src/shared/icons/components/x-mark-svg';
import {Button as IconButton} from 'src/components/UI/button/button-icon/button-icon';
import {getCreatePostStyles} from './styles';
import {Input} from 'src/components/UI/input/default-input/default-input';
import {Button as PublishButton} from 'src/components/UI/button/default-button/default-button';
import {useNavigation} from '@react-navigation/native';
import {ImageUpload} from 'src/components/UI/image-upload/image-upload';
import {inputsPlaceholders} from 'src/constants/placeholdersText';
import {useForm, Controller} from 'react-hook-form';
import {useCreatePost} from 'src/api/posts/gql/mutations/__generated__/post-create.mutation';
import {showToast} from 'src/utils/serverError';
import {
  FileCategory,
  handlePhotoUpload,
} from 'src/utils/imagePickerUploadPhoto';

interface SubmitProps {
  title: string;
  description: string;
}

export const CreatePost = () => {
  const themeVariant = useColorTheme();
  const styles = getCreatePostStyles(themeVariant);
  const navigation = useNavigation();
  const [createPost, {loading}] = useCreatePost();

  const {
    control,
    handleSubmit,
    formState: {dirtyFields},
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const [image, setImage] = React.useState<string | undefined>();
  const [mediaUrl, setMediaUrl] = React.useState<string | undefined>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmit = async (dataSubmit: SubmitProps) => {
    if (!mediaUrl) {
      showToast();
      return;
    }

    try {
      await createPost({
        variables: {
          input: {
            title: dataSubmit.title,
            description: dataSubmit.description,
            mediaUrl,
          },
        },
      });
      handleGoBack();
    } catch (e) {
      showToast();
    }
  };

  const isDisabled = () => {
    return !dirtyFields.title || !dirtyFields.description || !mediaUrl;
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <IconButton Icon={SvgArrowLeft} onPress={handleGoBack} />
        <Text style={[styles.fontTitle, styles.colorTitle]}>Create post</Text>
        <IconButton Icon={SvgXMark} onPress={handleGoBack} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerImage}>
          {image ? (
            <Image
              style={styles.imageSize}
              resizeMethod="resize"
              resizeMode="contain"
              source={{uri: image}}
            />
          ) : (
            <ImageUpload
              onUpload={() =>
                handlePhotoUpload({
                  fileCategory: FileCategory.POSTS,
                  onImageUriSet: setImage,
                  onMediaUrlSet: setMediaUrl,
                })
              }
            />
          )}
        </View>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <Input
              label="Title"
              placeholder={inputsPlaceholders.title}
              value={value}
              onChangeText={onChange}
              multiline
            />
          )}
          name="title"
        />
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <Input
              label="Post"
              placeholder={inputsPlaceholders.post}
              value={value}
              onChangeText={onChange}
              multiline
            />
          )}
          name="description"
        />
        <PublishButton
          buttonSize="large"
          title="Publish"
          onPress={handleSubmit(onSubmit)}
          isDisabled={isDisabled()}
          isLoading={loading}
        />
      </ScrollView>
    </>
  );
};
