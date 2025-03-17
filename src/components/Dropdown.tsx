import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {useDropdownStore} from '../store/useDropdownStore';
import EducationIcon from '../assets/svgs/Education.svg';
import ScienceIcon from '../assets/svgs/Science.svg';
import ArtIcon from '../assets/svgs/Art.svg';
import SportIcon from '../assets/svgs/Sport.svg';
import GamesIcon from '../assets/svgs/Games.svg';
import type {SvgProps} from 'react-native-svg';
import SearchInput from '././SearchInput';

const iconComponents: {[key: string]: React.FC<SvgProps>} = {
  education: EducationIcon,
  science: ScienceIcon,
  art: ArtIcon,
  sport: SportIcon,
  games: GamesIcon,
};

const Dropdown = () => {
  const {options} = useDropdownStore();
  const [input, setInput] = useState('');
  const [showList, setShowList] = useState(true);

  const filteredOptions = input.trim()
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(input.toLowerCase()),
      )
    : options;

  const IconComponent =
    filteredOptions.length === 1
      ? iconComponents[filteredOptions[0].icon]
      : undefined;

  return (
    <View className="w-full">
      <Text className="font-medium py-3 text-base text-neutral_10 ">
        Single select
      </Text>
      <SearchInput
        value={input}
        onChangeText={setInput}
        IconComponent={IconComponent}
      />

      {showList && (
        <FlatList
          data={
            filteredOptions.length > 0
              ? filteredOptions
              : [{label: '❌ No such option exists!', icon: 'error'}]
          }
          className="bg-white w-full mt-2 py-1 shadow-custom border-textPrimary rounded-lg"
          keyExtractor={(item) => item.label}
          renderItem={({item}) => {
            if (item.icon === 'error') {
              return (
                <View className="py-4 px-2 flex items-center">
                  <Text className="text-red-500 font-bold">{item.label}</Text>
                </View>
              );
            }

            const ItemIcon = iconComponents[item.icon] || ArtIcon;
            return (
              <TouchableOpacity
                className="flex-row items-center py-4 px-2"
                onPress={() => {
                  setInput(item.label);
                  setShowList(false);
                }}
              >
                <ItemIcon width={24} height={24} />
                <Text className="font-medium text-neutral_17 px-3">
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default Dropdown;
