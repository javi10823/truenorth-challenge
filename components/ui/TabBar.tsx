import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TabBar: FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  const renderItem = ({
    item: {name, key},
    index,
  }: {
    item: RouteProp<ParamListBase, string>;
    index: number;
  }): JSX.Element => {
    const isFocused = state.index === index;
    const {options} = descriptors[key];

    return (
      <TouchableOpacity
        key={`${name}/${index}`}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={navigation.navigate.bind(null, {
          name,
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
              color: isFocused ? '#1FC4DB' : '#0A132C',
            },
          ]}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={state.routes}
        keyExtractor={({name}) => name}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#F2F5FC',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    borderColor: '#1FC4DB',
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
