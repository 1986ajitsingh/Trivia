import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
// Custom files
import * as StyleUtils from '../Utils/StyleUtils';

const Entities = require('html-entities').AllHtmlEntities;

const entities = new Entities();

class Question extends Component {
  static options = ['True', 'False'];

  constructor() {
    super();
    this.state = {
      selectedSegment: 'none',
    };
  }

  componentWillReceiveProps() {
    this.state = {
      selectedSegment: 'none',
    };
  }

  optionSelected = (selectedSegment) => {
    this.setState({
      selectedSegment,
    }, () => {
      // Ajit - Giving some delay before showing next questions
      // so that user know what selection has been made.
      const timerId = setTimeout(() => {
        this.props.onQuestionAnswered(selectedSegment);
        clearTimeout(timerId);
      }, 100);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{entities.decode(this.props.questionText)}</Text>
        <SegmentedControls
          optionStyle={styles.segment}
          tint={StyleUtils.DARK_SHADE_COLOR}
          options={Question.options}
          onSelection={this.optionSelected}
          selectedOption={this.state.selectedSegment}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: StyleUtils.LIGHT_SHADE_COLOR,
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontSize: 30,
  },
  segment: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
  },
})

export default Question;
