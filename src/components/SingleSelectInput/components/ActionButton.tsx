import {AddIcon, DeleteIcon} from '@utils/getIconComponent';
import {mvp} from '@utils/makeValueResponsive';
import {Pressable, StyleSheet} from 'react-native';

interface ActionButtonProps {
  isDelete: boolean;
  onPress: () => void;
}

const ActionButton = ({isDelete, onPress}: ActionButtonProps) => {
  const Icon = isDelete ? DeleteIcon : AddIcon;
  const size = isDelete ? mvp(16) : mvp(32);
  const label = isDelete ? 'Clear selection' : 'Add new category';

  return (
    <Pressable
      style={styles.clearButton}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Icon width={size} height={size} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    height: '100%',
    width: mvp(35),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
});

export default ActionButton;
