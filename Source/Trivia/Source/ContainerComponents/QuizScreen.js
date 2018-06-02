import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';
import Question from '../PresentationalComponents/Question';
import answerQuestion from '../Actions/AnswerQuestionAction';

class QuizScreen extends Component {
  static navigationOptions = {
    title: 'Quiz',
    headerLeft: null,
    headerStyle: {
      backgroundColor: StyleUtils.DARK_SHADE_COLOR,
      height: StyleUtils.TITLE_BAR_HEIGHT,
    },
    headerTintColor: StyleUtils.LIGHT_TEXT_COLOR,
  };

  constructor() {
    super();
    this.state = {
      question: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    const questionIndex = this.props.navigation.getParam('questionIndex');
    this.setState({
      question: (nextProps.questions || [])[questionIndex],
    });
  }

  handleOnQuestionAnswered = (answer) => {
    const questionIndex = this.props.navigation.getParam('questionIndex');
    this.props.answerQuestion(questionIndex, answer);
    if (questionIndex < (this.props.questions.length - 1)) {
      this.props.navigation.navigate('Quiz', { questionIndex: questionIndex + 1 });
    } else {
      this.props.navigation.navigate('Result');
    }
  }

  render() {
    const questionIndex = this.props.navigation.getParam('questionIndex');
    return (
      <View style={styles.container}>
        <Question
          questionText={(this.state.question || {}).question}
          onQuestionAnswered={this.handleOnQuestionAnswered}
        />
        <Text style={styles.text}>{questionIndex + 1} of {this.props.questions.length}</Text>
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
    paddingVertical: 20,
    backgroundColor: StyleUtils.LIGHT_SHADE_COLOR,
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontSize: 30,
  },
})

const mapStateToProps = state => ({
  questions: state.questions,
});

const mapDispatchToProps = {
  answerQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
