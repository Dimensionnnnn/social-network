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

export const CreatePost = () => {
  const themeVariant = useColorTheme();
  const styles = getCreatePostStyles(themeVariant);
  const navigation = useNavigation();

  const [image, setImage] = React.useState<any>(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePhotoUpload = () => {
    ImagePicker.launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
      setImage,
    );
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <IconButton Icon={SvgArrowLeft} onPress={handleGoBack} />
        <Text style={[styles.fontTitle, styles.colorTitle]}>Create post</Text>
        <IconButton Icon={SvgXMark} onPress={handleGoBack} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {image ? (
          <Image
            style={styles.containerImage}
            resizeMode="contain"
            resizeMethod="resize"
            source={{uri: image.assets[0].uri}}
          />
        ) : (
          <ImageUpload onUpload={handlePhotoUpload} />
        )}
        <Input label="Title" placeholder={inputsPlaceholders.title} multiline />
        <Input label="Post" placeholder={inputsPlaceholders.post} multiline />
        <PublishButton buttonSize="large" title="Publish" />
      </ScrollView>
    </>
  );
};
