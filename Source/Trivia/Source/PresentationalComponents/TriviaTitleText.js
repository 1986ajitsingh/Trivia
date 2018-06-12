import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
} from 'react-native';
import * as StyleUtils from '../Utils/StyleUtils';

const TriviaTitleText = props => (
  <Text style={styles.titleText}>{props.children}</Text>
);

TriviaTitleText.propTypes = {
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  titleText: {
    marginTop: 20,
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 34,
  },
});

export default TriviaTitleText;
