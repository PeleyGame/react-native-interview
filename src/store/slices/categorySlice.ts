import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {categories as defaultCategories} from 'constants/categories';
import type {TCategory} from 'types/category';

import type {CategoryState} from '../types';

const initialState: CategoryState = {
  selectedCategory: null,
  inputValue: '',
  isFocused: false,
  categories: defaultCategories,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory: (
      state,
      action: PayloadAction<CategoryState['selectedCategory']>,
    ) => {
      state.selectedCategory = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setIsFocused: (state, action: PayloadAction<boolean>) => {
      state.isFocused = action.payload;
    },
    addToCategories: (state, action: PayloadAction<TCategory>) => {
      state.categories = [action.payload, ...state.categories];
    },
  },
});

export const {
  setSelectedCategory,
  setInputValue,
  setIsFocused,
  addToCategories,
} = categorySlice.actions;
export default categorySlice.reducer;
