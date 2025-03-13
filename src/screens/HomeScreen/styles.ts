import {mvp} from '@utils/makeValueResponsive';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import fonts from 'theme/fonts';
import {metrics} from 'theme/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.common.background,
    paddingHorizontal: metrics.paddings.screenHrPadding,
    paddingTop: mvp(130),
  },
  title: {
    ...fonts.mediumBold,
    color: colors.common.primaryText,
    marginBottom: mvp(8),
  },
});
