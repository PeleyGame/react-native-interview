import React, { useEffect } from 'react';
import {useCallback, useState} from 'react';
import {debounce} from 'lodash';
import Education from '../../assets/svgs/Education.svg';
import Science from '../../assets/svgs/Science.svg';
import Art from '../../assets/svgs/Art.svg';
import Sport from '../../assets/svgs/Sport.svg';
import Games from '../../assets/svgs/Games.svg';
import { SvgProps } from 'react-native-svg';
import { Alert } from 'react-native';
const iconsList = [
  { name: "Education", icon: Education },
  { name: "Science", icon: Science },
  { name: "Art", icon: Art },
  { name: "Sport", icon: Sport },
  { name: "Games", icon: Games },
];
export const useListFunctions = () => {
  const [searched, setSearched] = useState<string>('');
  const [list, setList] = useState<{name: string; icon: React.FC<SvgProps>}[]>(iconsList);
  const changeTextDebounced = useCallback(
    debounce((text: string) => {
      const cleanText = text.replace(/[^a-zA-Z0-9 ]/g, '').trim();
      console.log('Debounced Input:', cleanText);
      setSearched(cleanText); // Now updates state properly
    }, 200),
    [],
  );

  useEffect(() => {
    if (searched) {
      setList(iconsList.filter((item) => item.name.toLowerCase().includes(searched.toLowerCase())));
    } else {
      setList(iconsList);
    }
  }, [searched]);

  const onSelectItem = useCallback((item: string) => {
    Alert.alert('Selected Item:', item);
    setSearched('');
  }, []);

  return {
    list,
    searched,
    setSearched,
    changeTextDebounced,
    onSelectItem,
  };
};
