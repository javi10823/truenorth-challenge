import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = ({testID = 'logo-image'}) => (
  <Image
    style={styles.logo}
    source={require('../../assets/logo.png')}
    testID={testID}
  />
);

const styles = StyleSheet.create({
  logo: {
    width: 31,
    height: 26,
  },
});

export default Logo;
