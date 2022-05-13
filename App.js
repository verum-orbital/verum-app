import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import firebase from "firebase/compat/app"
import "firebase/compat/auth";

// Redux boilerplate
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
  apiKey: "AIzaSyBgzs5CqaJpcmgjXUvmoKBpPR4_1eOJHxs",
  authDomain: "verum-d3504.firebaseapp.com",
  projectId: "verum-d3504",
  storageBucket: "verum-d3504.appspot.com",
  messagingSenderId: "296337442652",
  appId: "1:296337442652:web:8c5d4c58877be20e60a399",
  measurementId: "G-JMMME1G6CE"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false
    }
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState( {
          loaded: true,
          loggedIn: false,
        })
      } else {
        this.setState({
          loaded: true,
          loggedIn: true,
        })
      }
    })
  }
  
  render() { 
    const { loaded, loggedIn } = this.state;
    
    if (!loaded) {
      return ( 
        <SafeAreaView style={styles.safeareaview}>
          <Text>Loading...</Text>
        </SafeAreaView>
      )
    } 
    
    if (!loggedIn) {
      return ( 
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShow: false }}/>
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
      );
    } 
    
    return ( 
      <SafeAreaView style={styles.safeareaview}>
        <Text>Log In Success!</Text>
      </SafeAreaView>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;