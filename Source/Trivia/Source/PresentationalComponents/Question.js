import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';
import TriviaContainer from '../PresentationalComponents/TriviaContainer';
import TriviaText from '../PresentationalComponents/TriviaText';

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
      // Ajit - Intentially giving some delay before showing next questions
      // so that user know what selection has been made.
      const timerId = setTimeout(() => {
        this.props.onQuestionAnswered(selectedSegment);
        clearTimeout(timerId);
      }, 100);
    });
  }

  render() {
    return (
      <TriviaContainer>
        <TriviaText>{this.props.questionText}</TriviaText>
        <SegmentedControls
          optionStyle={styles.segment}
          tint={StyleUtils.DARK_SHADE_COLOR}
          options={Question.options}
          onSelection={this.optionSelected}
          selectedOption={this.state.selectedSegment}
        />
      </TriviaContainer>
    );
  }
}

Question.propTypes = {
  questionText: PropTypes.string,
  onQuestionAnswered: PropTypes.func.isRequired,
};

Question.defaultProps = {
  questionText: 'No question text given',
};

const styles = StyleSheet.create({
  segment: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
  },
})

export default Question;
