import React, { Component } from "react";

import { Button, View, Text, StyleSheet } from "react-native";
import {  setLocalNotification , clearLocalNotification} from '../Utils/helpers';


export default class Decks extends Component {
  state = {
    Decks: [{}],
  };

  componentDidMount(){
    Platform.OS !== 'ios' && Platform.OS !== 'android'
    ? null
    : clearLocalNotification()
      .then(setLocalNotification)
      .then(console.log('New notification has been set'))
    
    }

  handleAcessDeck = (d) => {
      this.props?.navigation?.navigate("Deck",{currentDeck:d,
        handleGetScore:this.props.handleGetScore,
        mystate:this.props.mystate,
        handleCardAddition:this.props.handleCardAddition,
        getScoreCalculation:this.props.getScoreCalculation,
        deckId: this.props.getMyStateAddition().Decks?.length,
        deckName:`Deck${this.props.getMyStateAddition().Decks?.length}`
      });
  };
  render() {
    return (
      <View style={(styles.marginSm, styles.container)}>
        {this.props?.mystate
                  ?.Decks?.map((d,index) => {
            return (
              <View key={index}>
                <Text style={(styles.marginSm, styles.Title)}
                onPress={()=>this.handleAcessDeck(d)}
                > {d?.deckName}
                </Text>
                <Text style={(styles.SubTitle)}>
                  {d?.Quiz?.length||0} cards
                </Text>   
              </View>
            );
          })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEDE7",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Title: {
    fontSize: 45,
    color: "blue",
    fontWeight: "700",
  },
  SubTitle: {
    fontSize: 30,
    color: "pink",
    fontWeight: "400",
  },
});
