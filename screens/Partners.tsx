import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors, globalStyles} from '../styles';

type Partner = {
  name: string;
  url: string;
  comments: string;
};

const Partners = () => {
  const partnerList: Partner[] = [
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

  const ListItem = ({item}: {item: Partner}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.comments}>{item.comments}</Text>
      <Text style={styles.text}>
        URL: <Text style={styles.url}>{item.url}</Text>
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
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 12,
    marginHorizontal: 30,
    borderRadius: 8,
  },
  itemName: {
    color: colors.turquoise,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  comments: {
    ...globalStyles.text,
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    color: colors.black,
  },
  profileContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.backgroundGray,
    alignItems: 'center',
    paddingTop: 24,
  },
  title: {
    ...globalStyles.title,
    marginBottom: 24,
  },
  url: {
    color: colors.gray,
  },
});

export default Partners;
