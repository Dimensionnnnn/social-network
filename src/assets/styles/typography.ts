import {TextStyle} from 'react-native';

enum fonts {
  OUTFIT = 'outfit',
  NOWKY = 'nowky',
  OUTFIT_REGULAR = 'outfit-regular',
  OUTFIT_SEMIBOLD = 'outfit-semibold',
  OUTFIT_MEDIUM = 'outfit-medium',
}

export const nowkyTextStyles = {
  titleRegular_55: {
    fontFamily: fonts.NOWKY,
    fontWeight: '400',
    fontSize: 55,
    lineHeight: 53.51,
  },
};

export const outfitTextStyles: {[key: string]: TextStyle} = {
  titleMedium_32: {
    fontFamily: fonts.OUTFIT_MEDIUM,
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 40.32,
  },
  titleSemiBold_32: {
    fontFamily: fonts.OUTFIT_SEMIBOLD,
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 40.32,
  },
  headlineSemiBold_18: {
    fontFamily: fonts.OUTFIT_SEMIBOLD,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22.68,
  },
  headlineSemiBold_14: {
    fontFamily: fonts.OUTFIT_SEMIBOLD,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17.64,
  },
  bodyMedium_18: {
    fontFamily: fonts.OUTFIT_MEDIUM,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22.68,
  },
  bodyMedium_16: {
    fontFamily: fonts.OUTFIT_MEDIUM,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20.16,
  },
  bodyMedium_14: {
    fontFamily: fonts.OUTFIT_MEDIUM,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.64,
  },
  bodyRegular_18: {
    fontFamily: fonts.OUTFIT_REGULAR,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22.68,
  },
  bodyRegular_16: {
    fontFamily: fonts.OUTFIT_REGULAR,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20.16,
    letterSpacing: 0.03,
  },
  bodyRegular_14: {
    fontFamily: fonts.OUTFIT_REGULAR,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.32,
  },
  captionSemiBold_12: {
    fontFamily: fonts.OUTFIT_SEMIBOLD,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15.12,
  },
};
