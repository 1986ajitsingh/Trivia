import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';
import ResultItem from '../PresentationalComponents/ResultItem';
import { resetQuestions } from '../Actions/ResetQuestionsAction';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.questions.length === 0) {
      this.props.navigation.navigate('Home');
    }
  }

  onPressPlayAgain = () => {
    this.props.resetQuestions();
  }

  getTotalCorrectAnswers = () => {
    let totalCorrectAnswers = 0;
    (this.props.questions || []).forEach((question) => {
      if (question.correct_answer === question.given_answer) {
        totalCorrectAnswers = totalCorrectAnswers + 1;
      }
    });
    return totalCorrectAnswers;
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <ResultItem question={item} />
    </View>
  );

  render() {
    const { questions } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>You scored {'\n'} {this.getTotalCorrectAnswers()} / {this.props.questions.length}</Text>
        <FlatList
          data={questions}
          renderItem={this.renderItem}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPressPlayAgain}
        >
        <Text style = {styles.buttonText}>PLAT AGAIN?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: StyleUtils.LIGHT_SHADE_COLOR,
  },
  titleText: {
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: StyleUtils.DARK_SHADE_COLOR,
    padding: 10,
  },
  buttonText: {
    color: StyleUtils.LIGHT_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: StyleUtils.DARK_SHADE_COLOR,
  },
});

const mapStateToProps = (state) => {
  const storedQuestions = state.questions.map((question, index) => ({ key: index, ...question }));
  return {
    questions: storedQuestions,
  };
};

const mapDispatchToProps = {
  resetQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
