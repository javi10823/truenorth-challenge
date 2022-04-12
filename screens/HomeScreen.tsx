import React, {useContext, useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../components/ui';
import mockUsers from '../config/users.json';
import md5 from 'md5';
import {UserContext} from '../store/userContext';

const HomeScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const {setUserContext} = useContext(UserContext);

  const onSingIn = async () => {
    const user = mockUsers.find(
      ({name, pass}) => userName === name && md5(userPass) === pass,
    );

    if (user) {
      await setUserContext({name: userName, pass: userPass});
      await setUserName('');
      await setUserPass('');
      navigation.navigate('List');
    } else {
      Alert.alert('Incorrect credentials, please try again');
    }
  };

  const isValid = useMemo(
    () =>
      userName !== '' &&
      userName.trim().length > 2 &&
      userPass !== '' &&
      userPass.trim().length > 7,
    [userName, userPass],
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {marginBottom: 44}]}>Welcome</Text>
      <TextInput
        onChangeText={setUserName}
        style={styles.textInput}
        value={userName}
        placeholder="Enter your name"
      />
      <TextInput
        secureTextEntry
        onChangeText={setUserPass}
        value={userPass}
        style={styles.textInput}
        placeholder="Enter your passowrd"
      />
      <Button
        text="Sign in"
        disabled={!isValid}
        containerStyle={styles.buttonContainer}
        onPress={onSingIn}
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
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 44,
  },
});

export default HomeScreen;
