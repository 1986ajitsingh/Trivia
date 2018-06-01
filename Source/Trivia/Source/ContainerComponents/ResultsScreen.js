import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { fetchQuestions } from '../Actions/FetchQuestionsAction'
import reducer from '../Reducers';

class ResultsScreen extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.question}</Text>
    </View>
  );

  render() {
    const { questions } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={questions}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let storedQuestions = state.questions.map(question => ({ key: '0', ...question }));
  return {
    questions: storedQuestions
  };
};

const mapDispatchToProps = {
    fetchQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
