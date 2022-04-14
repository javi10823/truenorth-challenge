import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../../screens/HomeScreen';

it('should render correctly', () => {
  render(<HomeScreen navigation={jest.fn()} />);
});
