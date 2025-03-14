import {SINGLE_SELECT_HEIGHT} from '@components/SingleSelectInput/styles';
import {mvp} from '@utils/makeValueResponsive';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import fonts from 'theme/fonts';
import {metrics} from 'theme/metrics';

export const CATEGORY_ITEM_HEIGHT = mvp(44);
export const MAX_CATEGORIES_HEIGHT = CATEGORY_ITEM_HEIGHT * 5.5;

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: colors.global.categoryBackground,
    borderRadius: metrics.radius.standard,
    borderWidth: metrics.borders.small,
    borderColor: colors.common.borders,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    top: SINGLE_SELECT_HEIGHT + mvp(4),
    left: 0,
    height: MAX_CATEGORIES_HEIGHT,
  },
  categoryItem: {
    minHeight: CATEGORY_ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.paddings.standard,
  },
  categoryLabel: {
    marginRight: metrics.spacings.icons,
    ...fonts.mediumRegular,
  },
});
