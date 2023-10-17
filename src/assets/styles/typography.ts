import {TextStyle} from 'react-native';

const fontOutfit = 'outfit';
const fontNowky = 'nowky';

export const nowkyTextStyles = {
  titleRegular_55: {
    fontFamily: fontNowky,
    fontWeight: '400',
    fontSize: 55,
    lineHeight: 53.51,
  },
};

export const outfitTextStyles: {[key: string]: TextStyle} = {
  titleMedium_32: {
    fontFamily: fontOutfit,
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 40.32,
  },
  titleSemiBold_32: {
    fontFamily: fontOutfit,
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 40.32,
  },
  headlineSemiBold_18: {
    fontFamily: fontOutfit,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22.68,
  },
  headlineSemiBold_14: {
    fontFamily: fontOutfit,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17.64,
  },
  bodyMedium_18: {
    fontFamily: fontOutfit,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 22.68,
  },
  bodyMedium_16: {
    fontFamily: fontOutfit,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20.16,
  },
  bodyMedium_14: {
    fontFamily: fontOutfit,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.64,
  },
  bodyRegular_18: {
    fontFamily: fontOutfit,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22.68,
  },
  bodyRegular_16: {
    fontFamily: fontOutfit,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20.16,
    letterSpacing: 0.03,
  },
  bodyRegular_14: {
    fontFamily: fontOutfit,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.32,
  },
  captionSemiBold_12: {
    fontFamily: fontOutfit,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15.12,
  },
};
