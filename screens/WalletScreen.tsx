import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/ui';
import Account from './Account';
import Partners from './Partners';

const Tab = createBottomTabNavigator();

const WalletScreen = () => (
  <Tab.Navigator tabBar={TabBar} screenOptions={{headerShown: false}}>
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="Partners" component={Partners} />
  </Tab.Navigator>
);

export default WalletScreen;
