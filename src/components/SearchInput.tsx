import React from 'react';
import {View, TextInput, Text} from 'react-native';
import type {SvgProps} from 'react-native-svg';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  IconComponent?: React.FC<SvgProps>;
  notFound?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = '',
  IconComponent,
  notFound,
}) => {
  return (
    <View className="flex-row items-center border-custom border-2 shadow-custom px-4  rounded-md bg-white">
      {IconComponent && <IconComponent width={24} height={24} />}
      <TextInput
        className="w-full ml-2"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {/* {notFound && (
        <Text className="text-red-500 mt-1 px-2">
          "❌ No such option exists!"
        </Text>
      )} */}
    </View>
  );
};

export default SearchInput;
