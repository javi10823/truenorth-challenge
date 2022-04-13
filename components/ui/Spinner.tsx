import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = () => {
  return <ActivityIndicator style={styles.loading} />;
};

const styles = StyleSheet.create({
  loading: {
    alignSelf: 'center',
  },
});

export default Spinner;
