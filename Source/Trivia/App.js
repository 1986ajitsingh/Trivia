/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
// Custom classes
import reducer from './Source/Reducers';
import ResultsScreen from './Source/ContainerComponents/ResultsScreen';
import HomeScreen from './Source/ContainerComponents/HomeScreen';
import QuizScreen from './Source/ContainerComponents/QuizScreen';
import * as APIUtils from './Source/Utils/APIUtils'

const client = axios.create({
  baseURL: APIUtils.BASE_URL,
  responseType: 'json',
});

const Stack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Quiz: { screen: QuizScreen },
    Result: { screen: ResultsScreen },
  },
  {
    initialRouteName: 'Home',
  },
);

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  componentWillMount() {
    // Ajit - This is to hide yellow warnings.
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
