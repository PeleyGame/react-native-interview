import type {RootState} from '../index';

export const selectCategory = (state: RootState) => state.category;
export const selectCategories = (state: RootState) => state.category.categories;
export const selectSingleSelectIsFocused = (state: RootState) =>
  state.category.isFocused;
export const selectSelectedCategory = (state: RootState) =>
  state.category.selectedCategory;
