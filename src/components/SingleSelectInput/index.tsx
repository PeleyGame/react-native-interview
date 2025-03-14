import {useAppSelector} from '@store/hooks';
import {
  selectCategories,
  selectSelectedCategory,
} from '@store/slices/categorySelectors';
import {getIconComponent} from '@utils/getIconComponent';
import {Strings} from 'constants/strings';
import React, {forwardRef, useCallback, useMemo} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {colors} from 'theme/colors';
import type {TCategory} from 'types/category';

import {useSingleSelect} from '../../hooks/useSingleSelect';
import ActionButton from './components/ActionButton';
import {styles} from './styles';

interface SingleSelectInputProps {
  onClear: () => void;
  onOpenSelect: () => void;
  onAddCategory: (category: TCategory) => void;
}

const SingleSelectInput = forwardRef<TextInput, SingleSelectInputProps>(
  ({onClear, onOpenSelect, onAddCategory}, ref) => {
    // useSingleSelect for cleaner code and seperate some of the funcionallity
    const {
      handleBlur,
      handleFocus,
      handleInputChange,
      inputValue,
      isFocused,
      inputHasValue,
      showChip,
      isInputValueInCategories,
    } = useSingleSelect();

    const selectedCategory = useAppSelector(selectSelectedCategory);

    const handleActionPress = useCallback(() => {
      isInputValueInCategories
        ? onClear()
        : onAddCategory({label: inputValue, iconName: 'Default'});
    }, [isInputValueInCategories, onAddCategory, onClear, inputValue]);

    const renderSelectedChip = useCallback(() => {
      if (!selectedCategory) return null;

      const Icon = selectedCategory?.iconName
        ? getIconComponent(selectedCategory?.iconName)
        : null;
      return (
        <Pressable
          style={styles.input}
          onPress={onOpenSelect}
          accessibilityRole="button"
          accessibilityLabel={Strings.ACCESSIBILITY.SELECTED_CATEGORY(
            selectedCategory?.label,
          )}
          hitSlop={10}
        >
          <View style={styles.chip}>
            {Icon && <Icon width={16} height={16} />}
            <Text style={styles.chipText}>{selectedCategory?.label}</Text>
          </View>
        </Pressable>
      );
    }, [selectedCategory, onOpenSelect]);

    const renderInputField = useCallback(
      () => (
        <TextInput
          ref={ref}
          value={inputValue}
          onChangeText={handleInputChange}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          cursorColor={colors.global.textInputCursor}
          placeholder={Strings.SELECT_CATEGORY_OR_TYPE}
          placeholderTextColor={colors.global.textInputPlaceholder}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          autoFocus
          accessibilityLabel={Strings.ACCESSIBILITY.CATEGORY_INPUT}
          onSubmitEditing={handleActionPress}
          returnKeyType="send"
        />
      ),
      [
        ref,
        inputValue,
        handleInputChange,
        handleFocus,
        handleBlur,
        handleActionPress,
      ],
    );

    return (
      <View
        style={[
          styles.containerInput,
          !isFocused && styles.containerInputNoBorder,
        ]}
      >
        {showChip ? renderSelectedChip() : renderInputField()}

        {inputHasValue && (
          <ActionButton
            isDelete={isInputValueInCategories}
            onPress={handleActionPress}
          />
        )}
      </View>
    );
  },
);

export default SingleSelectInput;
