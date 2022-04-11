import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button, Card} from '../components/ui';

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

const ListScreen = ({navigation, route}) => {
  const [data, setData] = useState<any>();
  const {id} = route.params;

  const fetchUser = async () => {
    const baseUrl = 'https://api.coincap.io/v2/';
    const url = `${baseUrl}assets/${id}`;
    const response: any = await axios.get(url).catch(e => console.log(e));
    await setData(response.data.data);
  };

  useEffect(() => {
    fetchUser();
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
