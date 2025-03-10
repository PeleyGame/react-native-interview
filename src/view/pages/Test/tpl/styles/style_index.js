import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from 'helpers/Variables';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4.65,
  elevation: 6,
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.backgroundPage,
    padding: 20,
    height: '100%',
  },
  text_title: {
    // flex: 0.05,
    color: '#000',
    fontWeight: 'bold',
    marginTop: '30%',
    marginBottom: '2%',
  },
  list: {
    // ...shadow,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: COLORS.borderColor,
    marginTop: '2%',
    paddingLeft: 9,
  },
  text_input: {
    backgroundColor: '#fff',
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    color: '#000',
    paddingLeft: 20,
    // fontWeight: 'bold',
  },
});
