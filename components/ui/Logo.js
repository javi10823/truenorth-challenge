import React from 'react';
import {Image} from 'react-native';

function Logo() {
  return (
    <Image
      style={{width: 31, height: 26}}
      source={require('../../assets/logo.png')}
    />
  );
}

export default Logo;
