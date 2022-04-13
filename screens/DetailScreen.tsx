import React, {useEffect, useState, FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, Spinner} from '../components/ui';
import {fetchAsset} from '../api';
import {Asset} from '../api/types';
import {colors, globalStyles} from '../styles';

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
    return <Text style={globalStyles.errorMessage}>{error}</Text>;
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
        <Spinner />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    paddingHorizontal: 35,
    paddingTop: 24,
  },
  buttonStyle: {
    marginTop: 24,
  },
});

export default ListScreen;
