import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import axios from 'axios';

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets
 * API Example: https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen({navigation}) {
  const [data, setData] = useState<any>([]);

  const fetchUser = async () => {
    const baseUrl = 'https://api.coincap.io/v2/';
    const url = `${baseUrl}assets`;
    const response: any = await axios.get(url).catch(e => console.log(e));
    await setData(response.data.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const ListItem = ({item}) => (
    <View
      style={[
        styles.itemContainer,
        {
          marginVertical: 10,
        },
      ]}>
      <TouchableWithoutFeedback
        onPress={navigation.navigate.bind(null, 'Detail', {id: item.id})}>
        <View>
          <View style={styles.nameRow}>
            <Text style={styles.symbol}>
              {item.symbol} - <Text style={styles.name}>{item.name}</Text>
            </Text>
            <Text style={styles.rank}>#{item.rank}</Text>
          </View>
          <View style={styles.priceRow}>
            {/* 💯  In this execercise you can round numbers without a library */}
            <Text style={styles.price}>
              $ {Number(item.priceUsd).toFixed(2)}{' '}
              <Text style={styles.currency}>USD</Text>
            </Text>
            <View
              style={[
                styles.percentChangeCell,
                {
                  backgroundColor:
                    Number(item.changePercent24Hr) < 0 ? '#FDDCDC' : '#D1FAE5',
                },
              ]}>
              <Text
                style={[
                  styles.percent,
                  {
                    color:
                      Number(item.changePercent24Hr) < 0
                        ? '#A50606'
                        : '#065F46',
                  },
                ]}>
                {Number(item.changePercent24Hr) < 0
                  ? -Number(item.changePercent24Hr).toFixed(2)
                  : Number(item.changePercent24Hr).toFixed(2)}
                %
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.container}>
      {data && data.length > 0 ? (
        <FlatList
          style={{
            paddingHorizontal: 30,
          }}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <ListItem key={item.id} item={item} />}
        />
      ) : (
        <ActivityIndicator style={styles.loading} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 18,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbol: {
    fontWeight: '700',
    fontSize: 18,
    color: '#0A132C',
  },
  name: {
    fontWeight: '400',
    fontSize: 16,
    color: '#0A132C',
  },
  rank: {
    fontWeight: '500',
    fontSize: 14,
    color: '#6B7280',
    paddingRight: 13,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 13,
  },
  price: {
    color: '#019FB5',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
  },
  currency: {
    fontWeight: '500',
    fontSize: 14,
    color: '#6B7280',
  },
  percentChangeCell: {
    borderRadius: 12,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
  },
  percent: {
    fontSize: 14,
    fontWeight: '500',
  },
  loading: {
    alignSelf: 'center',
  },
});
