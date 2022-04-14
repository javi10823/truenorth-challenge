import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {TabBar} from '../../../components/ui';

const navigate = jest.fn(() => {
  if (props.state.index === 0) {
    return (props.state.index = 1);
  }
  props.state.index = 0;
});

const props: {state: any; descriptors: any; navigation: any; insets: any} = {
  state: {
    index: 0,
    routes: [
      {key: 'route_1', name: 'route_1'},
      {key: 'route_2', name: 'route_2'},
    ],
  },
  descriptors: {route_1: {options: {}}, route_2: {options: {}}},
  navigation: {navigate},
  insets: {},
};

it('renders correctly', () => {
  const {getByText} = render(<TabBar {...props} />);
  expect(getByText('route_1')).toBeDefined();
});

it('should execute press event', () => {
  const {getByText} = render(<TabBar {...props} />);

  expect(getByText('route_2')).toBeDefined();
  expect(navigate).toBeCalledTimes(0);
  fireEvent(getByText('route_2'), 'press');
  expect(navigate).toBeCalledTimes(1);
  expect(props.state.index).toEqual(1);
});
