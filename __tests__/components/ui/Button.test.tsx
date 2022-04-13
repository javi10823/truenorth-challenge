import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import {Button} from '../../../components/ui';

const TEST_TEXT = 'Test button text';

it('renders correctly', () => {
  const onPress = jest.fn();
  const {getByText} = render(<Button text={TEST_TEXT} onPress={onPress} />);

  expect(getByText(TEST_TEXT)).toBeDefined();
  expect(onPress).toBeCalledTimes(0);
});

it('should execute press event', () => {
  const onPress = jest.fn();
  const {getByText} = render(<Button text={TEST_TEXT} onPress={onPress} />);

  expect(getByText(TEST_TEXT)).toBeDefined();
  expect(onPress).toBeCalledTimes(0);
  fireEvent(getByText(TEST_TEXT), 'press');
  expect(onPress).toBeCalledTimes(1);
});
