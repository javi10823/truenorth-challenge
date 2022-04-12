import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ToDoScreen from './screens/ToDoScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';
import WalletScreen from './screens/WalletScreen';
import Logo from './components/ui/Logo';
import {UserContext} from './store/userContext';
const Stack = createStackNavigator();

function App() {
  const [userContext, setUserContext] = useState({name: '', pass: ''});

  return (
    <UserContext.Provider value={{userContext, setUserContext}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerTitle: Logo}}
          />
          <Stack.Screen name="ToDo" component={ToDoScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
