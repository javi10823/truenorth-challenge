import React, {FC} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../components/ui';

interface Props {
  navigation: any;
}

const ToDoScreen: FC<Props> = ({navigation}) => (
  <View style={styles.container}>
    <Image
      style={styles.illustration}
      source={require('../assets/home-illustration.png')}
    />
    <Text style={styles.title}>Howdy partner!</Text>
    <Text style={styles.text}>This is your assignment.</Text>
    <Text style={styles.text}>
      {'Follow the instructions on the Readme file.\n'}
    </Text>
    <Text style={styles.text}>
      Don’t worry, it’s easy! You should have the app looking smooth in no time.
    </Text>
    <Button
      text="Get Started"
      containerStyle={styles.buttonContainer}
      onPress={navigation.navigate.bind(null, 'Home')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: '25.5%',
  },
  illustration: {
    width: 206,
    height: 194,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A132C',
    marginVertical: 24,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#0A132C',
    lineHeight: 19,
  },
  buttonContainer: {
    marginTop: 44,
  },
});

export default ToDoScreen;
