import {mvp} from '@utils/makeValueResponsive';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import fonts from 'theme/fonts';
import {metrics} from 'theme/metrics';

export const styles = StyleSheet.create({
  containerInput: {
    borderWidth: metrics.borders.standard,
    borderColor: colors.global.textInputContainerBorder,
    borderRadius: metrics.radius.extra,
    overflow: 'hidden',
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
    paddingLeft: metrics.paddings.standard,
  },
});
