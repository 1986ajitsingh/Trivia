import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
} from 'react-native';
import * as StyleUtils from '../Utils/StyleUtils';

const TriviaText = props => (
  <Text style={styles.text}>{props.children}</Text>
);

TriviaText.propTypes = {
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontSize: 30,
  },
});

export default TriviaText;
