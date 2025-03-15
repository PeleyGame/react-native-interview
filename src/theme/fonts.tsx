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
  // mvp(16),
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
