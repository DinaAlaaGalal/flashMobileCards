import React, { useState, useEffect } from "react";
import { Button, View, TextInput, Text, StyleSheet } from "react-native";

export default StartQuiz = (props) => {
  let [state, setState] = useState({
    mybool: [],
    anotherbool: false,
    Score: 0,
  });

  useEffect(() => {
    props.currentDeck?.Quiz?.map((myq, index) => {
      state.mybool[index] = false;
    });
  }, []);
  useEffect(() => {
   
  }, [state.anotherbool]);
  // handleAnswerChange = (Answer) => {
  //   let s = { ...state };
  //   s.Answer = Answer;
  //   setState(s);
  // };
  handleGetMarkedCorrect = (q, index) => {
    q.score = 1;
    props.handleGetScore(q, 1);
    if (index === ((props.route.params.currentDeck?.Quiz?.length)-1) ) {
      let s = { ...state };
      s.anotherbool = true;
      setState(s);
    }
  };
  handleGetMarkedInCorrect = (q, index) => {
    props.handleGetScore(q, 0);
    if (index == ((props.route.params.currentDeck?.Quiz?.length)-1)) {
      let s = { ...state };
      s.anotherbool = true;
      setState(s);
    }
  };

  ShowAnswer = (q) => {
    props.currentDeck?.Quiz?.map((myq) => {
      if (myq.Question === q.Question) return myq.Answer;
    });
  };
  handleViewAnswer = (index) => {
    let s = { ...state };
    s.mybool[index] = true;
    if (index == ((props.route.params.currentDeck?.Quiz?.length)-1)) {
      s.anotherbool = true;
    }
    setState(s);
  };
  return (
    
    <View style={(styles.marginSm, styles.container)}>
      {props.route.params.currentDeck?.Quiz.length==0&&
      <Text>Sorry NO CARDS ADDED YET</Text>
      }
      {props.route.params.currentDeck?.Quiz.length!==0&&
      props.route.params.currentDeck?.Quiz?.map((q, index) => {
        return (
          <View key={index}>
            <Text
              style={{
                color: "black",
                margin: 10,
                textAlign: "center",
              }}
            >
              {q.Question}
            </Text>
            {state.mybool[index] && (
              <Text
                style={{
                  color: "black",
                  margin: 10,
                  textAlign: "center",
                }}
              >
                {q.Answer}
              </Text>
            )}
           
            <Button
              title="View Answer"
              color="#FFAEBC"
              onPress={() => handleViewAnswer(index)}
              style={styles.marginSm}
            ></Button>
            <Button
              title="Correct"
              color="#A0E7E5"
              onPress={() => handleGetMarkedCorrect(q, index)}
              style={styles.marginSm}
            ></Button>
            <Button
              title="InCorrect"
              color="#FFAEBC"
              onPress={() => handleGetMarkedInCorrect(q, index)}
              style={styles.marginSm}
            ></Button>
          
          {state.anotherbool && (
                <View style={styles.ScoreBored}>
                  <View style={styles.ScoreBored}>
                    <Text> SCore is :{props.route.params.getScoreCalculation(q)}</Text>
                  </View>
                </View>
              )}
          </View>
          );
  })}
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEDE7",
    alignItems: "center",
    justifyContent: "space-around",
  },
  marginSm: {
    paddingBottom: 200,
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
  ScoreBored: {
    borderColor: "pink",
    borderBottomWidth: 8,
    fontSize:9,
    textAlign: "center",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    marginBottom: 30,
  },
});
