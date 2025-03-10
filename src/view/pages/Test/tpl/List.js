import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles/style_index';
import Card from './Card';

const List = ({categories, isOpen, handleSelectOption}) => {
  return (
    <View style={[styles.list, {display: isOpen ? 'flex' : 'none'}]}>
      <FlatList
        data={categories}
        renderItem={({item: {id, title, icon}, index}) => (
          <Card
            id={id}
            title={title}
            icon={icon}
            setSelectedOption={(id, title, icon) => {
              handleSelectOption(id, title, icon);
            }}
          />
        )}
      />
    </View>
  );
};
export default List;
