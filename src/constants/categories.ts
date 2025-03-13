import type {TCategory} from '../types/category';
import {
  ArtIcon,
  EducationIcon,
  GamesIcon,
  ScienceIcon,
  SportIcon,
} from './icons';

export const categories: TCategory[] = [
  {label: 'Education', icon: EducationIcon},
  {label: 'Science', icon: ScienceIcon},
  {label: 'Art', icon: ArtIcon},
  {label: 'Sport', icon: SportIcon},
  {label: 'Games', icon: GamesIcon},
];
