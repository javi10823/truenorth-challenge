import React, {useContext} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {UserContext} from '../store/userContext';
import {colors, globalStyles} from '../styles';

const Account = () => {
  const {
    userContext: {name},
  } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require('../assets/finish-illustration.png')}
      />
      <Text style={styles.title}>Hello, {name}</Text>
      <Text style={styles.subtitle}>
        Glad you’re here. Hope to see you soon!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: '44%',
  },
  title: {
    ...globalStyles.title,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.black,
  },
  illustration: {
    width: '91%',
    height: '28%',
  },
});

export default Account;
