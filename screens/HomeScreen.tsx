import React, {FC, useContext, useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../components/ui';
import mockUsers from '../config/users.json';
import md5 from 'md5';
import {UserContext} from '../store/userContext';
import {colors, globalStyles} from '../styles';

interface Props {
  navigation: any;
}

const HomeScreen: FC<Props> = ({navigation}) => {
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
      Alert.alert('Incorrect credentials. Please try again');
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
      <Text style={styles.title}>Welcome</Text>
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
    backgroundColor: colors.white,
    paddingHorizontal: 35,
    paddingTop: '32%',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 9,
    borderColor: colors.inputGray,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 44,
  },
  title: {
    ...globalStyles.title,
    marginBottom: 44,
  },
});

export default HomeScreen;
