import AddIcon from '@assets/icons/Add.svg';
import ArtIcon from '@assets/icons/Art.svg';
import DefaultIcon from '@assets/icons/Default.svg';
import DeleteIcon from '@assets/icons/Delete.svg';
import EducationIcon from '@assets/icons/Education.svg';
import GamesIcon from '@assets/icons/Games.svg';
import ScienceIcon from '@assets/icons/Science.svg';
import SportIcon from '@assets/icons/Sport.svg';

export {
  AddIcon,
  ArtIcon,
  DefaultIcon,
  DeleteIcon,
  EducationIcon,
  GamesIcon,
  ScienceIcon,
  SportIcon,
};

import type {CategoryIconName} from '../types/category';

export const getIconComponent = (iconName: CategoryIconName) => {
  const iconMap = {
    Education: EducationIcon,
    Science: ScienceIcon,
    Art: ArtIcon,
    Sport: SportIcon,
    Games: GamesIcon,
    Delete: DeleteIcon,
    Default: DefaultIcon,
  };

  return iconMap[iconName];
};
