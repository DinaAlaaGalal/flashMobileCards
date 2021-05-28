import React, { Component } from "react";
import { Button, View,Form, TextInput,Text } from 'react-native';
export default class AddCard extends Component {
  state = {
    deckId:'',
    deckName:'',
    Question: '',
    Answer:''
  };
  componentDidMount(){
  
  }
  handleQuestionChange = (Question) => {
   let state={...this.state};
   state.Question = Question;
   this.setState(state);
  };

  handleAnswerChange = (Answer) => {
    let state={...this.state};
    state.Answer = Answer;
    this.setState(state);
   };
   
   handleAddCard=()=>{
    this.state.deckId = this.props.route.params.deckId;
    this.state.deckName=this.props.route.params.deckName;
    this.props.handleCardAddition(this.state);
   }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
           <TextInput  
                    style={{
                      borderWidth: 2,
                      borderColor: 'lightgrey',
                      margin: 10,
                      height: 45,
                      width:280,
                      paddingLeft: 10
                    }}
                    placeholder="Question"  
                    onChangeText={(Question)=>this.handleQuestionChange(Question)}  
                />  
                 <TextInput  
               style={{
                borderWidth: 2,
                borderColor: 'lightgrey',
                margin: 10,
                width:280,
                height: 45,
                marginBottom:55,
                paddingLeft: 10
              }}
                placeholder="Answer"  
                onChangeText={(Answer)=>this.handleAnswerChange(Answer)}  
            />  
        <Button title="Press me" color="#f194ff" onPress={()=>this.handleAddCard()}>
          {" "}
          ADD CARD
        </Button>
        {/* </Form> */}
      </View>
    );
  }
}
