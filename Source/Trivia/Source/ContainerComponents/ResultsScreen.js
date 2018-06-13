import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';
import ResultItem from '../PresentationalComponents/ResultItem';
import resetQuestions from '../Actions/ResetQuestionsAction';
import calculateTotalCorrectAnswers from '../Actions/CalculateTotalCorrectAnswersAction';
import TriviaContainer from '../PresentationalComponents/TriviaContainer';
import TriviaTitleText from '../PresentationalComponents/TriviaTitleText';
import TriviaButton from '../PresentationalComponents/TriviaButton';

class ResultsScreen extends Component {
  static navigationOptions = {
    title: 'Results',
    headerLeft: null,
    headerStyle: {
      backgroundColor: StyleUtils.DARK_SHADE_COLOR,
      height: StyleUtils.TITLE_BAR_HEIGHT,
    },
    headerTintColor: StyleUtils.LIGHT_TEXT_COLOR,
  };

  componentWillMount() {
    this.props.calculateTotalCorrectAnswers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.questions.length === 0) {
      this.props.navigation.navigate('Home');
    }
  }

  onPressPlayAgain = () => {
    this.props.resetQuestions();
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <ResultItem question={item} />
    </View>
  );

  render() {
    const { questions, totalCorrectAnswers } = this.props;
    return (
      <TriviaContainer>
        <TriviaTitleText>You scored {'\n'} {totalCorrectAnswers} / {(questions || []).length}</TriviaTitleText>
        <FlatList
          style={styles.list}
          data={questions}
          renderItem={this.renderItem}
        />
        <TriviaButton onPress={this.onPressPlayAgain}>PLAT AGAIN?</TriviaButton>
      </TriviaContainer>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: StyleUtils.DARK_SHADE_COLOR,
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  const storedQuestions = state.questions.map((question, index) => ({ key: index, ...question }));
  return {
    questions: storedQuestions,
    totalCorrectAnswers: state.totalCorrectAnswers,
  };
};

const mapDispatchToProps = {
  resetQuestions,
  calculateTotalCorrectAnswers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
