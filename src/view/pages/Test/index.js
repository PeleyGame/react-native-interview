import React, {useState} from 'react';
import {View} from 'react-native';
import {icons} from 'assets/images';
import strings from 'locales/En';
import {styles} from './tpl/styles/style_index';
import Title from './tpl/Title';
import Input from './tpl/Input';
import List from './tpl/List';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const categories = [
    {id: 1, title: strings.education, icon: icons.education},
    {id: 2, title: strings.science, icon: icons.science},
    {id: 3, title: strings.art, icon: icons.art},
    {id: 4, title: strings.sport, icon: icons.sport},
    {id: 5, title: strings.games, icon: icons.games},
  ];

  const handleSelectOption = (id, title, icon) => {
    setSelectedItem(id);
    // setSearchText(`${categories[index].title} ${categories[index].icon}`);
    setSearchText(title);
    setIsOpen(false);
    setIsFocus(false);
  };

  // const filteredOptions = categories.filter((option) =>
  //   option.title.toLowerCase().includes(searchText.toLowerCase()),
  // );

  return (
    <View style={styles.container}>
      {/* <View style={{flex: 0.2, fontSize: 12}}></View> */}

      <Title />

      <Input
        isFocus={isFocus}
        searchText={searchText}
        setIsOpen={(value) => setIsOpen(value)}
        setIsFocus={(value) => setIsFocus(value)}
      />

      {/* <View style={{flex: 0.015}}></View> */}

      <List
        categories={categories}
        isOpen={isOpen}
        handleSelectOption={(id, title, icon) => {
          handleSelectOption(id, title, icon);
        }}
      />
    </View>
  );
};

export default Test;
