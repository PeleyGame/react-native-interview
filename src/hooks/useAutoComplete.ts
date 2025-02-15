import {useState, useRef, useCallback, useMemo, useEffect} from 'react';
import type {TextInput} from 'react-native';
import type {
  AutoCompleteOption,
  useAutocompleteProps,
} from '../types/autocomplete';
import { useAutoCompleteContext } from '../context/AutoCompleteContext';

const useAutoComplete = ({
  options,
  defaultValue,
  onSelect,
}: useAutocompleteProps) => {
  const inputRef = useRef<TextInput>(null);
  const [searchQuery, setSearchQuery] = useState(defaultValue?.label || '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {selectedValue, setSelectedValue} = useAutoCompleteContext();

  // Memoize filtered options
  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) {
      return options;
    }
    return options.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, options]);

  const handleSelect = (value: AutoCompleteOption) => {
    setSearchQuery(value.label);
    setSelectedValue(value);
    setIsDropdownOpen(false);
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  const handleSearch = useCallback(
    (text: string) => {
      setSearchQuery(text);
      setIsDropdownOpen(true);
      if (!text.trim()) {
        setSelectedValue(null);
        onSelect?.(null);
      }
    },
    [onSelect],
  );

  const closeDropdown = useCallback(() => {
    inputRef.current?.blur();
    setIsDropdownOpen(false);
  }, []);

  return {
    inputRef,
    searchQuery,
    filteredOptions,
    isDropdownOpen,
    selectedValue,
    setIsDropdownOpen,
    handleSelect,
    handleSearch,
    closeDropdown,
  };
};

export default useAutoComplete;
