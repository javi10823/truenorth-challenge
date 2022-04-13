import {StyleSheet} from 'react-native';

export const colors = {
  turquoise: '#1FC4DB',
  black: '#0A132C',
  lightRed: '#FDDCDC',
  lightGreen: '#D1FAE5',
  strongRed: '#A50606',
  green: '#065F46',
  white: '#fff',
  gray: '#6B7280',
  borderGray: '#F2F5FC',
  backgroundGray: '#F8F8FA',
  inputGray: '#D1D5DB',
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    padding: 24,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    color: colors.black,
  },
});
