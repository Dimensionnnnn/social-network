import axios from 'axios';
import {getItemStorage} from './async-storage';
import {TOKEN} from 'src/context/auth-context';
import {formatS3Url} from 'src/helpers/formatS3Url';
import Config from 'react-native-config';

interface Props {
  fileName?: string;
  fileCategory: string;
  imageUri?: string;
}

export const uploadImageToS3 = async ({
  fileName,
  fileCategory,
  imageUri,
}: Props) => {
  const userTokenStorage = await getItemStorage(TOKEN.USER_TOKEN);
  const signedUrlEndpoint = Config.S3_BASE_URL;

  if (!signedUrlEndpoint) {
    return;
  }

  try {
    const signedUrlResponse = await axios.get(signedUrlEndpoint, {
      headers: {Authorization: `Bearer ${userTokenStorage}`},
      params: {
        fileName: fileName,
        fileCategory: fileCategory,
      },
    });

    if (!signedUrlResponse.data) {
      console.log('Error getting signed URL');
      return;
    }

    const response = await fetch(imageUri);
    const blob = await response.blob();

    const uploadImageToS3Server = await fetch(signedUrlResponse.data, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      body: blob,
    });

    if (uploadImageToS3Server.url) {
      const baseUrl = formatS3Url(uploadImageToS3Server.url);
      return baseUrl;
    }
  } catch (error) {
    console.log(error);
  }
};
