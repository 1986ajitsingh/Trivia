import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';
import fetchQuestions from '../Actions/FetchQuestionsAction';
import Loader from '../PresentationalComponents/Loader';
import TriviaContainer from '../PresentationalComponents/TriviaContainer';
import TriviaTitleText from '../PresentationalComponents/TriviaTitleText';
import TriviaText from '../PresentationalComponents/TriviaText';
import TriviaButton from '../PresentationalComponents/TriviaButton';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Trivia',
    headerStyle: {
      backgroundColor: StyleUtils.DARK_SHADE_COLOR,
      height: StyleUtils.TITLE_BAR_HEIGHT,
    },
    headerTintColor: StyleUtils.LIGHT_TEXT_COLOR,
  };

  constructor() {
    super();
    this.state = {
      showLoading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showLoading: nextProps.loading,
    }, () => {
      this.handleNewProps(nextProps);
    });
  }

  onPressBegin = () => {
    this.props.fetchQuestions();
  }

  handleNewProps(nextProps) {
    if ((nextProps.loading === false) && (nextProps.error != null)) {
      // Ajit - Below is a hack to a unknow react native issue,
      // that when we show alert from setState callback, UI gets stuck
      const timerId = setTimeout(() => {
        Alert.alert('Error loading questions. Please try again later.');
        clearTimeout(timerId);
      }, 200);
    } else if (nextProps.questions.length > 0) {
      this.props.navigation.navigate('Quiz');
    }
  }

  render() {
    return (
      <TriviaContainer>
        <Loader loading={this.state.showLoading} />
        <TriviaTitleText>Welcome to the Trivia Challenge!</TriviaTitleText>
        <TriviaText>You will be presented with 10 True or False questions.</TriviaText>
        <TriviaText>Can you score 100%?</TriviaText>
        <TriviaButton onPress={this.onPressBegin}>BEGIN</TriviaButton>
      </TriviaContainer>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
