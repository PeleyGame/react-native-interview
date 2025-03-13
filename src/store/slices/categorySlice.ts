import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {CategoryState} from '../types';

const initialState: CategoryState = {
  selectedCategory: null,
  inputValue: '',
  isFocused: false,
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
  },
});

export const {setSelectedCategory, setInputValue, setIsFocused} =
  categorySlice.actions;
export default categorySlice.reducer;
