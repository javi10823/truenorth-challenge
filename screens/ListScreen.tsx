import React, {FC, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {fetchAssets} from '../api';
import {Asset} from '../api/types';
import {Card} from '../components/ui';

interface Props {
  navigation: any;
}

const ListScreen: FC<Props> = ({navigation}) => {
  const [data, setData] = useState<Asset[]>([]);
  const [error, setError] = useState('');

  const fetchData = async () => {
    const response = await fetchAssets();
    if (response.message) {
      return setError(response.message);
    }
    await setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ListItem = ({item}: {item: Asset}) => (
    <Card
      item={item}
      containerStyle={styles.cardContainer}
      onPress={navigation.navigate.bind(null, 'Detail', {id: item.id})}
    />
  );

  if (error) {
    return <Text style={styles.errorMessage}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {data && data.length > 0 ? (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <ListItem key={item.id} item={item} />}
        />
      ) : (
        <ActivityIndicator style={styles.loading} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
  },
  loading: {
    alignSelf: 'center',
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    padding: 24,
  },
  cardContainer: {marginVertical: 10},
  list: {
    paddingHorizontal: 30,
  },
});

export default ListScreen;
