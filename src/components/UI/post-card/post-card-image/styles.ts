import {StyleSheet} from 'react-native';

export const cardImageStyles = {
  root: StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 335,
      height: 226,
      borderRadius: 17,
      overflow: 'hidden',
    },
    imageSize: {
      width: '100%',
      height: '100%',
    },
  }),
};

export const getCardTitleStyles = () => {
  return {
    container: cardImageStyles.root.container,
    imageSize: cardImageStyles.root.imageSize,
  };
};
