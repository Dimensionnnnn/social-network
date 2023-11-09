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
import * as ImagePicker from 'react-native-image-picker';
import {inputsPlaceholders} from 'src/constants/placeholdersText';
import {uploadImageToS3} from 'src/utils/s3-signed-url';
import {useForm, Controller} from 'react-hook-form';
import {useCreatePost} from 'src/api/posts/gql/mutations/__generated__/post-create.mutation';
import {showToast} from 'src/utils/serverError';

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

  const [image, setImage] = React.useState<any>(null);
  const [mediaUrl, setMediaUrl] = React.useState<string | undefined>('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePhotoUpload = async () => {
    ImagePicker.launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
      async response => {
        if (!response.didCancel && !response.errorMessage && response.assets) {
          const {uri, fileName} = response.assets[0];
          setImage(uri);

          const url = await uploadImageToS3({
            fileName,
            fileCategory: 'POSTS',
            imageUri: uri,
          });
          setMediaUrl(url);
        }
      },
    );
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
      console.log(e);
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
            <ImageUpload onUpload={handlePhotoUpload} />
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
