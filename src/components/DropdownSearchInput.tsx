import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import type {SvgProps} from 'react-native-svg';
import AddIcon from '../assets/svgs/Add.svg';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  IconComponent?: React.FC<SvgProps>;
  notFound?: boolean;
  onAddPress?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = '',
  IconComponent,
  notFound,
  onAddPress,
}) => {
  return (
    <View className="flex-row items-center border-custom border-2 shadow-custom px-4 rounded-md bg-white">
      {IconComponent && <IconComponent width={16} height={16} />}
      <TextInput
        className="flex-1 ml-2"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {notFound && (
        <TouchableOpacity
          onPress={onAddPress}
          className="ml-2 p-2 bg-blue-500 rounded"
        >
          <AddIcon width={20} height={20} fill="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
