import React, {FC} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props {
  item: any;
  onPress?: () => void;
  detail?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Card: FC<Props> = ({item, onPress, detail, containerStyle = {}}) => (
  <View style={[styles.itemContainer, containerStyle]}>
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.nameRow}>
          <Text style={styles.symbol}>
            {item.symbol} <Text style={styles.name}>- {item.name}</Text>
          </Text>
          <Text style={styles.rank}>#{item.rank}</Text>
        </View>
        <View style={styles.priceRow}>
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
                    Number(item.changePercent24Hr) < 0 ? '#A50606' : '#065F46',
                },
              ]}>
              {Number(item.changePercent24Hr) < 0
                ? -Number(item.changePercent24Hr).toFixed(2)
                : Number(item.changePercent24Hr).toFixed(2)}
              %
            </Text>
          </View>
        </View>
        {detail && (
          <View style={{marginTop: 6}}>
            <Text style={styles.detailText}>
              Supply{' '}
              <Text style={styles.detailValue}>
                {Number(item.supply).toFixed(2)}
              </Text>
            </Text>
            <Text style={styles.detailText}>
              Max Supply{' '}
              <Text style={styles.detailValue}>
                {Number(item.maxSupply).toFixed(2)}
              </Text>
            </Text>
            <Text style={styles.detailText}>
              Market Cap ${' '}
              <Text style={styles.detailValue}>
                {Number(item.marketCapUsd).toFixed(2)}{' '}
                <Text style={styles.currency}>USD</Text>
              </Text>
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
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
  detailText: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#0A132C',
  },
  detailValue: {
    fontWeight: '400',
    fontSize: 16,
  },
});

export default Card;
