import {create} from 'zustand';

interface Option {
  label: string;
  icon: string;
}

interface DropdownStore {
  options: Option[];
  addOption: (newOption: Option) => void;
}

export const useDropdownStore = create<DropdownStore>((set) => ({
  options: [
    {label: 'Education', icon: 'education'},
    {label: 'Science', icon: 'science'},
    {label: 'Art', icon: 'art'},
    {label: 'Sport', icon: 'sport'},
    {label: 'Games', icon: 'games'},
  ],
  addOption: (newOption) =>
    set((state) => ({
      options: [...state.options, newOption],
    })),
}));
