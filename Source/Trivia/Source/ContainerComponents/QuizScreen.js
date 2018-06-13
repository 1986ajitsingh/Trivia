import React, { Component } from 'react';
import { connect } from 'react-redux';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';
import Question from '../PresentationalComponents/Question';
import answerQuestion from '../Actions/AnswerQuestionAction';
import TriviaContainer from '../PresentationalComponents/TriviaContainer';
import TriviaTitleText from '../PresentationalComponents/TriviaTitleText';
import TriviaText from '../PresentationalComponents/TriviaText';

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

  componentWillMount() {
    this.setState({
      question: (this.props.questions || [])[this.props.questionIndex],
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasMoreUnansweredQuestions) {
      this.setState({
        question: (nextProps.questions || [])[nextProps.questionIndex],
      });
    } else {
      this.props.navigation.navigate('Result');
    }
  }

  handleOnQuestionAnswered = (answer) => {
    this.props.answerQuestion(answer);
  }

  render() {
    return (
      <TriviaContainer>
        <TriviaTitleText>{(this.state.question || {}).category}</TriviaTitleText>
        <Question
          questionText={(this.state.question || {}).question}
          onQuestionAnswered={this.handleOnQuestionAnswered}
        />
        <TriviaText>{
          this.props.questionIndex + 1} of {(this.props.questions || []).length}
        </TriviaText>
      </TriviaContainer>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  hasMoreUnansweredQuestions: state.hasMoreUnansweredQuestions,
  questionIndex: state.questionIndex,
});

const mapDispatchToProps = {
  answerQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
