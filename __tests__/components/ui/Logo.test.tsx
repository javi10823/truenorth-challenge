import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';
import {Logo} from '../../../components/ui';

it('should render correctly', () => {
  const {getByTestId} = render(<Logo />);
  expect(getByTestId('logo-image').props.source).toBe(
    require('../../../assets/logo.png'),
  );
});
