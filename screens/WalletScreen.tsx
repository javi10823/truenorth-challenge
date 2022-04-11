import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/ui';

/**
 * ToDo: In the Account tab, print the name submited in the Sign-In form
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

const Tab = createBottomTabNavigator();

const WalletScreen = () => {
  return (
    <Tab.Navigator tabBar={TabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="Account" component={AccountSection} />
      <Tab.Screen name="Partners" component={PartnersSection} />
    </Tab.Navigator>
  );
};

const AccountSection = () => (
  <View style={styles.container}>
    <Image
      style={styles.illustration}
      source={require('../assets/finish-illustration.png')}
    />
    <Text style={styles.title}>Hello, $contextName</Text>
    <Text style={styles.subtitle}>Glad you’re here. Hope to see you soon!</Text>
  </View>
);

const PartnersSection = () => {
  const partnerList = [
    {
      name: 'App1',
      url: '#',
      comments: 'Description of the application and what you did.',
    },
    {
      name: 'App2',
      url: '#',
      comments: 'Description of the application and what you did.',
    },
    {
      name: 'App3',
      url: '#',
      comments: 'Description of the application and what you did.',
    },
  ];

  const ListItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.comments}>{item.comments}</Text>
      <Text style={styles.text}>
        URL: <Text style={{color: '#6B7280'}}>{item.url}</Text>
      </Text>
    </View>
  );

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.title}>Partners</Text>
      <Text style={styles.text}>Here are some apps I was involved in:</Text>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView style={{marginTop: 24}}>
          {partnerList.map(item => (
            <ListItem key={item.name} item={item} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 172,
  },
  profileContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8FA',
    alignItems: 'center',
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#0A132C',
  },
  illustration: {
    width: 354,
    height: 139,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 12,
    marginHorizontal: 30,
    borderRadius: 8,
  },

  itemName: {
    color: '#019FB5',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  comments: {
    fontSize: 16,
    color: '#0A132C',
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    color: '#0A132C',
  },
});

export default WalletScreen;
