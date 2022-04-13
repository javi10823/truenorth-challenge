import React, {useContext} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {UserContext} from '../store/userContext';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '44%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#0A132C',
  },
  illustration: {
    width: '91%',
    height: '28%',
  },
});

export default Account;
