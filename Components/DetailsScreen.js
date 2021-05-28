import React, { Component } from "react";
import { Button, View, TextInput,Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
export default class DetailsScreen extends Component {
    state = {
        Decks: [],
      };
      handleQuestionChange = (Question) => {
       let state={...this.state};
       state.Question = Question;
       //Set Satate
       this.setState(state);
    };
    handleAnswerChange = (Answer) => {
        let state={...this.state};
        state.Answer = Answer;
        //Set Satate
        this.setState(state);
    };
    handleAddCard=()=>{      
    }
    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          </View>
        );
      }
    };