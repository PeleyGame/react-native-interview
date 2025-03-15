export type CategoryIconName =
  | 'Education'
  | 'Science'
  | 'Art'
  | 'Sport'
  | 'Default'
  | 'Games';

export interface TCategory {
  label: string;
  iconName: CategoryIconName;
}
