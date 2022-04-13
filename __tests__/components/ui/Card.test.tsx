import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Card} from '../../../components/ui';

const TestItem = {
  symbol: 'ETH',
  rank: '1',
  priceUsd: '4353',
  changePercent24Hr: '4',
  name: 'Ethereum',
  supply: '1000000000',
  maxSupply: '1000000000000',
  marketCapUsd: '4236000000000000',
};

it('renders correctly', () => {
  const {getByText} = render(<Card item={TestItem} />);
  expect(getByText(new RegExp(TestItem.symbol))).toBeDefined();
  expect(getByText(new RegExp(TestItem.rank))).toBeDefined();
  expect(getByText(new RegExp(TestItem.name))).toBeDefined();
  expect(getByText(new RegExp(TestItem.priceUsd))).toBeDefined();
});

it('should execute press event', () => {
  const onPress = jest.fn();
  const {getByText} = render(<Card item={TestItem} onPress={onPress} />);
  expect(getByText(new RegExp(TestItem.name))).toBeDefined();
  fireEvent(getByText(new RegExp(TestItem.name)), 'press');
  expect(onPress).toBeCalledTimes(1);
});
