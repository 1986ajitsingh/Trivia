import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as StyleUtils from '../Utils/StyleUtils';

const TriviaContainer = props => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: StyleUtils.LIGHT_SHADE_COLOR,
  },
});

export default TriviaContainer;
