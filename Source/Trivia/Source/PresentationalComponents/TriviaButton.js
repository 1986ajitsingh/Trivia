import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import * as StyleUtils from '../Utils/StyleUtils';

const TriviaButton = props => (
  <TouchableHighlight
    style={styles.button}
    onPress={props.onPress}
  >
    <Text style={styles.buttonText}>{props.children}</Text>
  </TouchableHighlight>
);

TriviaButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: StyleUtils.DARK_SHADE_COLOR,
    padding: 10,
  },
  buttonText: {
    color: StyleUtils.LIGHT_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TriviaButton;
