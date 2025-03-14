import {
  selectCategories,
  selectCategory,
} from '@store/slices/categorySelectors';
import {useCallback, useMemo} from 'react';

import {useAppDispatch, useAppSelector} from '../store/hooks';
import {setInputValue, setIsFocused} from '../store/slices/categorySlice';
import type {TCategory} from '../types/category';

interface UseSelectReturn {
  inputValue: string;
  isFocused: boolean;
  selectedCategory: TCategory | null;
  handleInputChange: (value: string) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  inputHasValue: boolean;
  showChip: boolean;
  isInputValueInCategories: boolean;
}

export const useSingleSelect = (): UseSelectReturn => {
  const dispatch = useAppDispatch();

  const {inputValue, isFocused, selectedCategory} =
    useAppSelector(selectCategory);
  const categories = useAppSelector(selectCategories);

  const inputHasValue = !!inputValue?.length;
  const showChip = !isFocused && !!selectedCategory;
  const isInputValueInCategories = useMemo(
    () => categories.some((category) => category.label === inputValue),
    [categories, inputValue],
  );

  const handleInputChange = useCallback(
    (value: string) => {
      dispatch(setInputValue(value));
    },
    [dispatch],
  );

  const handleFocus = useCallback(() => {
    dispatch(setIsFocused(true));
  }, [dispatch]);

  const handleBlur = useCallback(() => {
    dispatch(setIsFocused(false));
  }, [dispatch]);

  return {
    inputValue,
    isFocused,
    selectedCategory,
    handleInputChange,
    handleFocus,
    handleBlur,
    inputHasValue,
    showChip,
    isInputValueInCategories,
  };
};
