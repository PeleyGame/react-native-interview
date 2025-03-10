import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
// import PropTypes from 'prop-types';
import {styles} from './styles/style_card';

const Card = ({id, title, icon, setSelectedOption}) => {
  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        setSelectedOption(id, title, icon);
      }}
    >
      <Text allowFontScaling={false} style={styles.optionText}>
        {title} <Image source={icon} style={styles.icon} />
      </Text>
    </TouchableOpacity>
  );
};
// Card.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string,
//   icon: PropTypes.string,
//   setSelectedOption: PropTypes.func,
// };
export default Card;
