import {mvp} from '@utils/makeValueResponsive';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import fonts from 'theme/fonts';
import {metrics} from 'theme/metrics';

export const SINGLE_SELECT_HEIGHT = mvp(44);

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerInput: {
    borderWidth: metrics.borders.standard,
    borderColor: colors.global.textInputContainerBorder,
    borderRadius: metrics.radius.extra,
    overflow: 'hidden',
    height: SINGLE_SELECT_HEIGHT,
  },
  containerInputNoBorder: {
    borderColor: colors.global.textInputInactiveBorder,
  },
  input: {
    ...fonts.extraRegular,
    color: colors.global.textInputText,
    backgroundColor: colors.global.textInputBackgrounds,
    borderWidth: metrics.borders.standard,
    borderColor: colors.global.textInputInnerBorder,
    borderRadius: metrics.radius.standard,
    paddingHorizontal: metrics.paddings.standard,
    height: mvp(40),
    paddingRight: mvp(40),
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  chipText: {
    ...fonts.extraRegular,
    color: colors.global.textInputText,
    paddingLeft: metrics.spacings.icons,
  },
  closeText: {
    ...fonts.h4Regular,
    color: colors.global.textInputText,
  },
});
