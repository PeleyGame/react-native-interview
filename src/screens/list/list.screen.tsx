import React, {useCallback} from 'react';
import {View, StyleSheet, FlatList, Pressable} from 'react-native';
import Text from '../../components/text';
import {useListFunctions} from './useListFunctions';
import {hp, wp} from '../../utils/style/screenResize';
import AnimatedTextInput from '../../components/animatedTextInput';
import { SvgProps } from 'react-native-svg';
import Education from '../../assets/svgs/Education.svg';
const ListScreen = () => {
  const {searched, changeTextDebounced, list, onSelectItem} = useListFunctions();

  const renderItem = useCallback(
    ({item}: {item: {name: string; icon: React.FC<SvgProps>}}) => {
      const Icon = item.icon;
      return (
        <Pressable onPress={onSelectItem.bind(null, item.name)} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Icon key={item.name} width={wp(10)} height={hp(3)} fill="#000" />
        </Pressable>
      );
    },
    [list],
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Single Select</Text>
      <AnimatedTextInput
        value={searched}
        onChangeText={changeTextDebounced}
        style={styles.searchBoxStyle}
        placeholder="Search"
      />
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    paddingHorizontal: wp(5),
    justifyContent: 'flex-start',
    paddingTop: hp(15),
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
  },
  title: {
    fontSize: hp(3),
    alignSelf: 'flex-start',
  },
  searchBoxStyle: {
    width: wp(90),
    height: hp(6),
    borderWidth: 2,
    marginTop: hp(2),
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: '#C8B6ED',
  },
  flatListContainer: {
    width: wp(90),
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#D4D4D4',
    marginTop:hp(2),
    paddingHorizontal:wp(4),
  },
  itemContainer: {
    flexDirection: 'row',
    // width: wp(87),

    height: hp(6),
    borderColor: '#C8B6ED',
    alignItems: 'center',
  },
  itemText: {
    fontSize: hp(1.6),
    fontFamily: 'Ubuntu-Medium',
  },
});

export default ListScreen;
