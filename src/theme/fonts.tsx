import {mvp} from '@utils/makeValueResponsive';
import {StyleSheet} from 'react-native';

const size = {
  h1: mvp(55),
  h3: mvp(24),
  h4: mvp(22),
  h5: mvp(20),
  h6: mvp(18),
  extra: mvp(16),
  medium: mvp(14),
  compact: mvp(13),
  small: mvp(12),
  tiny: mvp(10),
};

export const fontNames = {
  boldFont: 'Ubuntu-Bold', // fontWeight: 700 - 800
  regularFont: 'Ubuntu-Medium', //fontWight:  500
};

export default StyleSheet.create({
  // mvp(22)
  h4Regular: {
    fontSize: size.h4,
  },
  // h5: mvp(20),
  h5Bold: {
    fontSize: size.h5,
    fontFamily: fontNames.boldFont,
    lineHeight: mvp(25),
  },
  h5Regular: {
    fontSize: size.h5,
    fontFamily: fontNames.regularFont,
    lineHeight: mvp(25),
  },
  // h6: mvp(18),
  h6Regular: {
    fontSize: size.h6,
    fontFamily: fontNames.regularFont,
  },
  h6Bold: {
    fontSize: size.h6,
    fontFamily: fontNames.boldFont,
    lineHeight: mvp(24),
  },
  // mvp(16),
  extraBold: {
    fontSize: size.extra,
    lineHeight: mvp(16),
    fontFamily: fontNames.boldFont,
    fontWeight: '700',
  },
  extraRegular: {
    fontSize: size.extra,
    lineHeight: mvp(18),
    fontFamily: fontNames.regularFont,
    fontWeight: '500',
  },
  // mvp(14),
  mediumBold: {
    fontSize: size.medium,
    lineHeight: mvp(16),
    fontFamily: fontNames.boldFont,
    fontWeight: '700',
  },
  mediumRegular: {
    fontSize: size.medium,
    lineHeight: mvp(18),
    fontFamily: fontNames.regularFont,
    fontWeight: '500',
  },
});
