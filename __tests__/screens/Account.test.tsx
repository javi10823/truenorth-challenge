import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';
import Account from '../../screens/Account';

it('should render correctly', () => {
  render(<Account />);
});
