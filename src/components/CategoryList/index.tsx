import {useAppSelector} from '@store/hooks';
import {selectCategories} from '@store/slices/categorySelectors';
import {getIconComponent} from '@utils/getIconComponent';
import {mvp} from '@utils/makeValueResponsive';
import {Strings} from 'constants/strings';
import React, {memo, useCallback} from 'react';
import {Pressable, Text} from 'react-native';
import Animated, {Easing, FadeInLeft} from 'react-native-reanimated';
import type {TCategory} from 'types/category';

import {styles} from './styles';

interface CategoryListProps {
  onCategorySelect: (category: TCategory) => void;
}

const CategoryList = memo(({onCategorySelect}: CategoryListProps) => {
  const categories = useAppSelector(selectCategories);

  const renderItem = useCallback(
    ({item}: {item: TCategory}) => {
      const Icon = getIconComponent(item.iconName);

      return (
        <Pressable
          style={styles.categoryItem}
          onPress={() => onCategorySelect(item)}
          accessibilityRole="button"
          accessibilityLabel={Strings.ACCESSIBILITY.SELECT_CATEGORY(item.label)}
        >
          <Text style={styles.categoryLabel}>{item.label}</Text>
          <Icon width={mvp(16)} height={mvp(16)} />
        </Pressable>
      );
    },
    [onCategorySelect],
  );

  return (
    <Animated.FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.label}
      keyboardShouldPersistTaps="handled"
      entering={FadeInLeft.duration(300).easing(Easing.inOut(Easing.quad))}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
});

CategoryList.displayName = 'CategoryList';

export default CategoryList;
