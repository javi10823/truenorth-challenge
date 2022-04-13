import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles';

const TabBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => (
  <View style={styles.container}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const {options} = descriptors[route.key];

      return (
        <TouchableOpacity
          key={`${route}/${index}`}
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={navigation.navigate.bind(null, {
            name: route.name,
            merge: true,
            params: undefined,
          })}
          style={[
            styles.button,
            {
              borderTopWidth: isFocused ? 3 : 0,
            },
          ]}>
          <Text
            style={[
              styles.label,
              {
                color: isFocused ? colors.turquoise : colors.black,
              },
            ]}>
            {route.name}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: colors.borderGray,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderColor: colors.turquoise,
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 43,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default TabBar;
