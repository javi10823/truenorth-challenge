import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/ui';
import Account from './Account';
import Partners from './Partners';

/**
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

const Tab = createBottomTabNavigator();

const WalletScreen = () => (
  <Tab.Navigator tabBar={TabBar} screenOptions={{headerShown: false}}>
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="Partners" component={Partners} />
  </Tab.Navigator>
);

export default WalletScreen;
