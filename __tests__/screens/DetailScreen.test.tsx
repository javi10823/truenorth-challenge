import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';
import DetailScreen from '../../screens/DetailScreen';
// import {fetchAsset} from '../../__mock__/api.mock';

const CreateProps = () => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {params: {id: 0}},
});

// beforeAll(() => {
//   jest.mock(require('../../api/index'));

// afterAll(() => {
//   jest.unmock(require('../../api/index'));
// });

it('should render correctly', () => {
  render(<DetailScreen {...CreateProps()} />);
});
