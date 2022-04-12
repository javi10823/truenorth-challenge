import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Partners = () => {
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
        <FlatList
          data={partnerList}
          keyExtractor={({name}) => name}
          renderItem={ListItem}
        />
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Partners;
