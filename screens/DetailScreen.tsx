import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button, Card} from '../components/ui';
import {fetchAsset} from '../api';

/**
 * 💯 Handle loading and error scenarios, always
 */

const ListScreen = ({navigation, route}) => {
  const [data, setData] = useState<any>();
  const {id} = route.params;

  const getData = async () => {
    const response: any = await fetchAsset(id);
    await setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

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
});

export default ListScreen;
