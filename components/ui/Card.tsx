import React, {FC, useMemo} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import {colors, globalStyles} from '../../styles';
import arrowDown from '../../assets/arrowDown.png';
import arrowUp from '../../assets/arrowUp.png';

interface Props {
  item: any;
  onPress?: () => void;
  detail?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Card: FC<Props> = ({item, onPress, detail, containerStyle = {}}) => {
  const isNegative = useMemo(() => Number(item.changePercent24Hr) < 0, [item]);

  return (
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
                  backgroundColor: isNegative
                    ? colors.lightRed
                    : colors.lightGreen,
                },
              ]}>
              <Image
                source={isNegative ? arrowDown : arrowUp}
                style={styles.arrow}
              />
              <Text
                style={[
                  styles.percent,
                  {
                    color: isNegative ? colors.strongRed : colors.green,
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
            <View style={styles.detailContainer}>
              <Text style={styles.detailText}>
                Supply{' '}
                <Text style={globalStyles.text}>
                  {Number(item.supply).toFixed(2)}
                </Text>
              </Text>
              <Text style={styles.detailText}>
                Max Supply{' '}
                <Text style={globalStyles.text}>
                  {Number(item.maxSupply).toFixed(2)}
                </Text>
              </Text>
              <Text style={styles.detailText}>
                Market Cap ${' '}
                <Text style={globalStyles.text}>
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
};

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    backgroundColor: colors.white,
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
    color: colors.black,
  },
  name: {
    fontWeight: '400',
    fontSize: 16,
    color: colors.black,
  },
  rank: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.gray,
    paddingRight: 13,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 13,
  },
  price: {
    color: colors.turquoise,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
  },
  currency: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.gray,
  },
  percentChangeCell: {
    borderRadius: 12,
    height: 24,
    flexDirection: 'row',
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
    color: colors.black,
  },
  arrow: {
    width: 10,
    height: 12,
    marginRight: 5,
  },
  detailContainer: {
    marginTop: 6,
  },
});

export default Card;
