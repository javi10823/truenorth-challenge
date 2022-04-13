import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';
import {Spinner} from '../../../components/ui';

it('should render correctly', () => {
  render(<Spinner />);
});
