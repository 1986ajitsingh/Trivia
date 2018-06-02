import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// Custom files
import * as StyleUtils from '../Utils/StyleUtils';

const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

class ResultItem extends Component {
  getAnswerText = () => {
    const question = (this.props.question || {});
    let answerText = '-';
    if (question.correct_answer === question.given_answer) {
      answerText = '+';
    }
    return answerText;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.answerText}>{this.getAnswerText()}</Text>
        <Text style={styles.questionText}>{entities.decode(this.props.question.question)}</Text>
      </View>
    );
  }
}

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
