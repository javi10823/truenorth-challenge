import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../components/ui';
/*
  Implement form using any user/pass combination
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {marginBottom: 44}]}>Welcome</Text>
      <TextInput
        style={[styles.textInput, {marginBottom: 16}]}
        placeholder="Enter your name"
      />
      <TextInput style={styles.textInput} placeholder="Enter your passowrd" />
      <Button
        text="Sign in"
        containerStyle={styles.buttonContainer}
        onPress={navigation.navigate.bind(null, 'List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingTop: '32%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A132C',
  },
  textInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 9,
    borderColor: '#D1D5DB',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 44,
  },
});

export default HomeScreen;
