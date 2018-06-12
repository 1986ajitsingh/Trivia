import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// Custom files
import * as StyleUtils from '../Utils/StyleUtils';

const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

function getAnswerText(questionObj) {
  const question = (questionObj || {});
  let answerText = '-';
  if (question.correct_answer === question.given_answer) {
    answerText = '+';
  }
  return answerText;
}

const ResultItem = props => (
  <View style={styles.container}>
    <Text style={styles.answerText}>{getAnswerText(props.question)}</Text>
    <Text style={styles.questionText}>{entities.decode(props.question.question)}</Text>
  </View>
);

ResultItem.propTypes = {
  question: PropTypes.objectOf({
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    given_answer: PropTypes.string.isRequired,
  }),
};

ResultItem.defaultProps = {
  question: {
    question: 'No question input given',
    correct_answer: 'True',
    given_answer: 'False',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  answerText: {
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontSize: 40,
    marginRight: 10,
  },
  questionText: {
    color: StyleUtils.DARK_TEXT_COLOR,
    fontSize: 20,
    marginRight: 10,
  },
});

export default ResultItem;
