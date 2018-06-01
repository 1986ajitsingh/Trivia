import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class QuizScreen extends Component {
  componentDidMount() {
    
  }

  onPressBegin = () => {

  }

  render() {
    return (
      <View> 
        <Text>Quiz screen</Text>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
