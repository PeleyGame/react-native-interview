export interface AutoCompleteOption {
  label: string;
  value: string;
  icon?: JSX.Element;
}

export interface AutoCompleteProps {
  options: AutoCompleteOption[];
  defaultValue?: AutoCompleteOption | null;
  onSelect?: (value: AutoCompleteOption | null) => void;
  placeholder?: string;
  autoCompleteWidth?: number;
}

export interface useAutocompleteProps {
  options: AutoCompleteOption[];
  defaultValue?: AutoCompleteOption | null;
  onSelect?: (value: AutoCompleteOption | null) => void;
}

export interface AutoCompleteContextProps {
  selectedValue: AutoCompleteOption | null;
  setSelectedValue: (value: AutoCompleteOption | null) => void;
}
