import {useCallback} from 'react';

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
}

export const useSingleSelect = (): UseSelectReturn => {
  const dispatch = useAppDispatch();
  const {inputValue, isFocused, selectedCategory} = useAppSelector(
    (state) => state.category,
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
  };
};
