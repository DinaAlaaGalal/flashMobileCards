import React, { Component } from "react";
import { Button, View,TextInput } from 'react-native';
export default class AddDeck extends Component {
  state = {
    deckId:'',
    deckName:''
  };
  
  handleDeckNameChange = (deckName) => {
   let state={...this.state};
   state.deckName = deckName;
   this.setState(state);
  };

   handleAddDeck=()=>{
     console.log(this.props.deckId)
    this.state.deckId =(this.props.getMyStateAddition().Decks?.length)+1;
    this.props.handleDeckAddition(this.state);
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
                    placeholder="deckName"  
                    onChangeText={(deckName)=>this.handleDeckNameChange(deckName)}  
                />  
          
        <Button title="Press me" color="#f194ff" onPress={()=>this.handleAddDeck()}>
          {" "}
          ADD CARD
        </Button>
      
      </View>
    );
  }
}
