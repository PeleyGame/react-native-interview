import type {TCategory} from '../types/category';

export interface CategoryState {
  selectedCategory: TCategory | null;
  inputValue: string;
  isFocused: boolean;
}
