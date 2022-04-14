import React from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from '../../assets/logo.png';

const Logo = ({testID = 'logo-image'}) => (
  <Image style={styles.logo} source={logo} testID={testID} />
);

const styles = StyleSheet.create({
  logo: {
    width: 31,
    height: 26,
  },
});

export default Logo;
