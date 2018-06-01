/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

// Custom classes
import reducer from './Source/Reducers';
import ResultsScreen from './Source/ContainerComponents/ResultsScreen';
import * as APIUtils from './Source/APIUtils'
// Ajit - todo - remove this
import HomeScreen from './Source/ContainerComponents/HomeScreen';
import QuizScreen from './Source/ContainerComponents/QuizScreen';


const client = axios.create({
  baseURL: APIUtils.BASE_URL,
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <QuizScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});

