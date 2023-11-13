import {uploadImageToS3} from './s3-signed-url';
import * as ImagePicker from 'react-native-image-picker';

export enum FileCategory {
  POSTS = 'POSTS',
  AVATARS = 'AVATARS',
}

interface Props {
  fileCategory: FileCategory;
  onImageUriSet: (imageUri?: string) => void;
  onMediaUrlSet: (mediaUrl?: string) => void;
}

export const imagePickerUploadPhoto = async ({
  fileCategory,
  onImageUriSet,
  onMediaUrlSet,
}: Props) => {
  ImagePicker.launchImageLibrary(
    {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
    async response => {
      if (!response.didCancel && !response.errorMessage && response.assets) {
        const {uri, fileName} = response.assets[0];
        onImageUriSet(uri);

        const url = await uploadImageToS3({
          fileName,
          fileCategory,
          imageUri: uri,
        });
        onMediaUrlSet(url);
      }
    },
  );
};
