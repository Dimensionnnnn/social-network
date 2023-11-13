import React from 'react';
import {Pressable, Text} from 'react-native';
import {useColorTheme} from 'src/hooks/theme/useColorTheme';
import {SvgUpload} from 'src/shared/icons/components/upload-svg';
import {getImageUploadStyles} from './styles';

const imageUploadTitle = 'Upload your photo here';

interface Props {
  onUpload: () => void;
}

export const ImageUpload: React.FC<Props> = ({onUpload}) => {
  const themeVariant = useColorTheme();
  const styles = getImageUploadStyles(themeVariant);
  return (
    <Pressable
      onPress={onUpload}
      style={[
        styles.container,
        styles.containerBackground,
        styles.containerBorderColor,
      ]}>
      <SvgUpload color={styles.colorIcon} />
      <Text style={[styles.fontTitle, styles.colorTitle]}>
        {imageUploadTitle}
      </Text>
    </Pressable>
  );
};
