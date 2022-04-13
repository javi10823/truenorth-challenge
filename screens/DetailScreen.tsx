import React, {useEffect, useState, FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button, Card} from '../components/ui';
import {fetchAsset} from '../api';
import {Asset} from '../api/types';

interface Props {
  navigation: any;
  route: any;
}

const ListScreen: FC<Props> = ({navigation, route}) => {
  const [data, setData] = useState<Asset>();
  const [error, setError] = useState('');
  const {id} = route.params;

  const getData = async () => {
    const response = await fetchAsset(id);
    if (response.message) {
      return setError(response.message);
    }
    await setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <Text style={styles.errorMessage}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <Card item={data} detail />
          <Button
            containerStyle={styles.buttonStyle}
            text="My Wallet"
            onPress={navigation.navigate.bind(null, 'Wallet')}
          />
        </>
      ) : (
        <ActivityIndicator style={styles.loading} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FA',
    paddingHorizontal: 35,
    paddingTop: 24,
  },
  buttonStyle: {
    marginTop: 24,
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
});

export default ListScreen;
