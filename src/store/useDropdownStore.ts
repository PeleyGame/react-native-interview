import {create} from 'zustand';

type Option = {
  label: string;
  icon: string;
};

type DropdownStore = {
  options: Option[];
  addOption: (label: string) => void;
};

const iconMap: {[key: string]: string} = {
  education: 'education',
  science: 'science',
  art: 'art',
  sport: 'sport',
  games: 'games',
};

export const useDropdownStore = create<DropdownStore>((set) => ({
  options: [
    {label: 'Education', icon: iconMap.education},
    {label: 'Science', icon: iconMap.science},
    {label: 'Art', icon: iconMap.art},
    {label: 'Sport', icon: iconMap.sport},
    {label: 'Games', icon: iconMap.games},
  ],
  addOption: (label) =>
    set((state) => {
      const normalizedLabel = label.toLowerCase().trim();
      const icon = iconMap[normalizedLabel] || 'art';

      return {
        options: [...state.options, {label, icon}],
      };
    }),
}));
