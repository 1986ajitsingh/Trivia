import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  componentDidMount() {
    
  }

  onPressBegin = () => {

  }

  render() {
    return (
      <View> 
        <Text>Welcome to the Trivia Challenge!</Text>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <Button 
            onPress = {this.onPressBegin()} 
            title = "Begin"
            accessibilityLabel = "Press to begin the test." 
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
