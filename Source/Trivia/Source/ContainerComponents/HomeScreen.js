import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';
import fetchQuestions from '../Actions/FetchQuestionsAction';
import Loader from '../PresentationalComponents/Loader';

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
      this.props.navigation.navigate('Quiz', { questionIndex: 0 });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.showLoading} />
        <Text style={styles.titleText}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.text}>You will be presented with 10 True or False questions.</Text>
        <Text style={styles.text}>Can you score 100%?</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPressBegin}
        >
          <Text style={styles.buttonText}>BEGIN</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: StyleUtils.LIGHT_SHADE_COLOR,
  },
  titleText: {
    marginTop: 20,
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 34,
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: StyleUtils.DARK_TEXT_COLOR,
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: StyleUtils.DARK_SHADE_COLOR,
    padding: 10,
  },
  buttonText: {
    color: StyleUtils.LIGHT_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
})

const mapStateToProps = state => ({
  questions: state.questions,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
