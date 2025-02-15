/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import type {AutoCompleteProps} from '../../types/autocomplete';
import useAutoComplete from '../../hooks/useAutoComplete';
import { AutoCompleteProvider } from '../../context/AutoCompleteContext';

const {width, height} = Dimensions.get('window');

const AutoCompleteContent: React.FC<AutoCompleteProps> = ({
  options,
  defaultValue,
  onSelect,
  placeholder = '',
  autoCompleteWidth = 250,
}) => {
  const {
    inputRef,
    searchQuery,
    filteredOptions,
    isDropdownOpen,
    selectedValue,
    setIsDropdownOpen,
    handleSearch,
    handleSelect,
    closeDropdown,
  } = useAutoComplete({ options, defaultValue, onSelect });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.wrapper}
    >
      {isDropdownOpen && <Pressable style={styles.overlay} onPress={closeDropdown} />}

      <View style={[styles.centeredView, { width: autoCompleteWidth }]}>
        <Text style={styles.title}>Single Select</Text>
        <TextInput
          ref={inputRef}
          style={[styles.input, { borderColor: isDropdownOpen ? '#d5c4f6' : '#ccc' }]}
          placeholder={placeholder}
          value={searchQuery}
          onChangeText={handleSearch}
          onFocus={() => setIsDropdownOpen(true)}
        />

        {isDropdownOpen && filteredOptions.length > 0 && (
          <FlatList
            data={filteredOptions}
            keyExtractor={(item) => item.value}
            keyboardShouldPersistTaps="handled"
            style={styles.dropdown}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.item, selectedValue?.value === item.value && styles.selectedItem]}
                onPress={() => handleSelect(item)}
              >
                <Text
                  style={[
                    styles.label,
                    selectedValue?.value === item.value && styles.selectedLabel,
                  ]}
                >
                  {item.label}
                </Text>
                {item.icon && item.icon}
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  return (
    <AutoCompleteProvider>
      <AutoCompleteContent {...props} />
    </AutoCompleteProvider>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
  centeredView: {
    zIndex: 20,
  },
  input: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
 dropdown: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
    maxHeight: 150,
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  selectedItem: {
    backgroundColor: '#d5c4f6',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 8,
  },
  selectedLabel: {
    color: '#5a2d82',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default AutoComplete;
