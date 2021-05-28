import React, { useState, useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default Deck = (props) => {
  state = {
  
    Decks: [
      {
      },
    ],
  };
  let [mys, setMys] = useState( props.getMyStateAddition());

  handleAddCard = () => {
    if (Object.keys(props).length != 0) {  
      props?.navigation?.navigate("AddCard",{
        handleCardAddition:props.route.params.handleCardAddition,
        handleGetScore:props.route.params.handleGetScore,
        mystate:props.route.params.mystate,
        getScoreCalculation:props.route.params.getScoreCalculation,
         deckId: props.route.params.mystate.Decks?.length,
         deckName:`Deck${props.route.params.mystate.Decks?.length}`
      });
    }
  };

  handleStartQuiz = () => {
    props?.navigation?.navigate("StartQuiz",{
      currentDeck:props.route.params.currentDeck,
      handleGetScore:props.route.params.handleGetScore,
      handleGetScore:props.route.params.handleGetScore,
      getScoreCalculation:props.route.params.getScoreCalculation,
      mystate:props.route.params.mystate,
         deckId: props.route.params.mystate.Decks?.length,
         deckName:`Deck${props.route.params.mystate.Decks?.length}`
    }
    );

  };
  handleDeleteDeck = (d) => {
    let mydeck={...props.getMyStateAddition()}
    mydeck.Decks=mydeck?.Decks.filter(myd=>myd.deckId!==d.deckId) 
    setMys(mydeck);
    props.handleDeckDeletation(mydeck); 
    props?.navigation?.navigate("Decks");   
  };

  return (
    <View style={(styles.marginSm, styles.container)} >
             <Text style={(styles.marginSm, styles.Title)}>{props.route.params.currentDeck.deckName}</Text>
            <Text style={(styles.marginSm,styles.SubTitle)}>{props.route.params.currentDeck.deckId-1} cards</Text>
      <Button
        title="ADD CARD"
        color="#A0E7E5"
        onPress={()=>this.handleAddCard()}
        style={styles.marginSm}
      >
        {" "}
      </Button>
      <Button
        title="Start Quiz"
        color="#FFAEBC"
        onPress={()=>this.handleStartQuiz()}
        style={styles.marginSm}
      >
        {" "}
      </Button>
      <Button
        title="Delete Deck"
        color="#B4F8C8"
        onPress={()=>this.handleDeleteDeck(props.route.params.currentDeck)}
        style={styles.marginSm}
      >
        {" "}
      </Button>
        </View>  
  );
};
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEDE7",
    alignItems: "center",
    justifyContent: "space-around",
  },
  marginSm: {
    paddingBottom:200,
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
