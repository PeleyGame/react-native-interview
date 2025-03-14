import CategoryList from '@components/CategoryList';
import SingleSelectInput from '@components/SingleSelectInput';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {selectSingleSelectIsFocused} from '@store/slices/categorySelectors';
import {
  addToCategories,
  setInputValue,
  setIsFocused,
  setSelectedCategory,
} from '@store/slices/categorySlice';
import {Strings} from 'constants/strings';
import React, {useCallback, useRef} from 'react';
import type {TextInput} from 'react-native';
import {Text, View} from 'react-native';
import type {TCategory} from 'types/category';

import {styles} from './styles';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const singleSelectInputRef = useRef<TextInput | null>(null);
  const isFocused = useAppSelector(selectSingleSelectIsFocused);

  const handleFocusChange = useCallback(
    (shouldFocus: boolean) => {
      dispatch(setIsFocused(shouldFocus));
      const input = singleSelectInputRef.current;
      shouldFocus ? input?.focus() : input?.blur();
    },
    [dispatch],
  );

  const openSingleSelect = useCallback(
    () => handleFocusChange(true),
    [handleFocusChange],
  );

  const closeSingleSelect = useCallback(
    () => handleFocusChange(false),
    [handleFocusChange],
  );

  const handleCategorySelection = useCallback(
    (category: TCategory) => {
      dispatch(setSelectedCategory(category));
      dispatch(setInputValue(category.label));
      closeSingleSelect();
    },
    [dispatch, closeSingleSelect],
  );

  const handleClearCategory = useCallback(() => {
    dispatch(setSelectedCategory(null));
    dispatch(setInputValue(''));
    openSingleSelect();
  }, [dispatch, openSingleSelect]);

  const handleAddCategory = useCallback(
    (category: TCategory) => {
      dispatch(setSelectedCategory(category));
      dispatch(setInputValue(category.label));
      dispatch(addToCategories(category));
      closeSingleSelect();
    },
    [dispatch, closeSingleSelect],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        {Strings.TITLE}
      </Text>
      <View style={styles.containerSelect}>
        <SingleSelectInput
          ref={singleSelectInputRef}
          onClear={handleClearCategory}
          onOpenSelect={openSingleSelect}
          onAddCategory={handleAddCategory}
        />
        {isFocused && (
          <CategoryList
            onCategorySelect={handleCategorySelection}
            key={isFocused ? 'category-list-visible' : 'category-list-hidden'}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
