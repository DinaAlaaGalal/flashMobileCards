import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LogBox } from "react-native";

import AddCard from "./Components/AddCard";
import Deck from "./Components/Deck";
import Decks from "./Components/Decks";
import AddDeck from "./Components/AddDeck";
import StartQuiz from "./Components/StartQuiz";
import {setLocalNotification} from './Utils/helpers';
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const HomeStack = createStackNavigator();

function HomeStackScreen(props) {
  let handleCardAddition = props.handleCardAddition;
  let getMyStateAddition = props.getMyStateAddition;
  let handleDeckAddition = props.handleDeckAddition;
  let mystate = props.mystate;
  let navigation = props.navigation;
  let handleGetScore = props.handleGetScore;
  let handleDeckDeletation = props.handleDeckDeletation;
  let getScoreCalculation=props.getScoreCalculation;
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="AddDeck"
        children={(props) => (
          <AddDeck
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleGetScore={handleGetScore}
            handleDeckAddition={handleDeckAddition}
            handleDeckDeletation={handleDeckDeletation}
            getScoreCalculation={getScoreCalculation}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
      <HomeStack.Screen
        name="Decks"
        children={(props) => (
          <Decks
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleDeckAddition={handleDeckAddition}
            handleDeckDeletation={handleDeckDeletation}
            handleGetScore={handleGetScore}
            getScoreCalculation={getScoreCalculation}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />

      <HomeStack.Screen
        name="Deck"
        children={(props) => (
          <Deck
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleDeckDeletation={handleDeckDeletation}
            handleDeckAddition={handleDeckAddition}
            getScoreCalculation={getScoreCalculation}
            handleGetScore={handleGetScore}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
      <HomeStack.Screen
        name="AddCard"
        children={() => (
          <AddCard
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleDeckAddition={handleDeckAddition}
            getScoreCalculation={getScoreCalculation}
            handleGetScore={handleGetScore}
            handleDeckDeletation={handleDeckDeletation}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
      <HomeStack.Screen
        name="StartQuiz"
        children={() => (
          <StartQuiz
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleDeckAddition={handleDeckAddition}
            getScoreCalculation={getScoreCalculation}
            handleDeckDeletation={handleDeckDeletation}
            handleGetScore={handleGetScore}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
    </HomeStack.Navigator>
  );
}

const DeckStack = createStackNavigator();

function DeckStackScreen(props) {
  let handleCardAddition = props.handleCardAddition;
  let getMyStateAddition = props.getMyStateAddition;
  let handleDeckAddition = props.handleDeckAddition;
  let handleGetScore = props.handleGetScore;
  let mystate = props.mystate;
  let navigation = props.navigation;
  let handleDeckDeletation = props.handleDeckDeletation;
  let getScoreCalculation=props.getScoreCalculation;

  return (
    <DeckStack.Navigator>
      <DeckStack.Screen
        name="Decks"
        children={(props) => (
          <Decks
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleDeckAddition={handleDeckAddition}
            handleGetScore={handleGetScore}
            handleDeckDeletation={handleDeckDeletation}
            getScoreCalculation={getScoreCalculation}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
      <DeckStack.Screen
        name="Deck"
        children={(props) => (
          <Deck
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleDeckAddition={handleDeckAddition}
            handleDeckDeletation={handleDeckDeletation}
            getScoreCalculation={getScoreCalculation}
            handleGetScore={handleGetScore}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
      <DeckStack.Screen
        name="AddDeck"
        children={(props) => (
          <AddDeck
            {...props}
            handleCardAddition={handleCardAddition}
            getMyStateAddition={getMyStateAddition}
            handleDeckDeletation={handleDeckDeletation}
            handleDeckAddition={handleDeckAddition}
            handleGetScore={handleGetScore}
            getScoreCalculation={getScoreCalculation}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
      <DeckStack.Screen
        name="AddCard"
        children={(props) => (
          <AddCard
            {...props}
            handleCardAddition={handleCardAddition}
            handleDeckDeletation={handleDeckDeletation}
            getMyStateAddition={getMyStateAddition}
            handleDeckAddition={handleDeckAddition}
            getScoreCalculation={getScoreCalculation}
            handleGetScore={handleGetScore}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
      <DeckStack.Screen
        name="StartQuiz"
        children={(props) => (
          <StartQuiz
            {...props}
            handleCardAddition={handleCardAddition}
            handleDeckDeletation={handleDeckDeletation}
            getMyStateAddition={getMyStateAddition}
            handleDeckAddition={handleDeckAddition}
            getScoreCalculation={getScoreCalculation}
            handleGetScore={handleGetScore}
            mystate={mystate}
            navigation={navigation}
          />
        )}
      />
    </DeckStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  let [mystate, setState] = useState({
    Decks: [
      {
        deckId: "1",
        deckName: "Deck1",
        Quiz: [],
      },
    ],
  });

  useEffect(() => {
    setLocalNotification()
  }, []);

  useEffect(() => {
    getMyStateAddition();
  }, [mystate]);

  handleDeckDeletation = (d) => {
    setState(d);
  };
  handleCardAddition = (d) => {
    mystate.Decks.map((myd) => {
      if (myd?.deckId === d.deckId) {
        myd.Quiz = [
          ...myd.Quiz,
          {
            QID: "Q" + (myd.Quiz.length + 1),
            Question: d.Question,
            Answer: d.Answer,
          },
        ];
      } else {
        mystate.Decks.map((myd) => {
          (myd.deckId = d.deckId), (myd.deckName = d.deckName);
          myd.Quiz = [
            ...myd.Quiz,
            {
              QID: "Q" + (myd.Quiz.length + 1),
              Question: d.Question,
              Answer: d.Answer,
            },
          ];
        });
      }
      console.log(mystate);
      return mystate;
    });
    setState(mystate);
  };

  handleDeckAddition = (d) => {
    const mys = { ...mystate };
    mys.Decks = [...mys.Decks, d];
    setState(mys);
    return mystate;
  };

  handleGetScore = (d, num) => {
    console.log(d);
    const mys = { ...mystate };
    const myi = mys.Decks.map((myq, i) => {
      myq.Quiz.map((q) => q.Question == d.Question);
      return i;
    });
    mys.Decks[myi].Quiz.map((q) => {
      if (q.Question == d.Question) {
        q.score = num;
      }
    });
    console.log(mys);
    setState(mys);
    return mystate;
  };

  getMyStateAddition = () => {
    return mystate;
  };

  getScoreCalculation=(quiz)=>{
    const mys = { ...mystate };
    let total=0;
    const myi = mys.Decks.map((myq, i) => {
      myq.Quiz.map((q) => q.Question == quiz.Question);
      return i;
    });
    let x=myi[0];
    mys.Decks[x].Quiz.map((q) => {
        total+=q.score;
        console.log(total)
    });
    console.log(total)
    return total;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Decks"
          children={(props) => (
            <DeckStackScreen
              {...props}
              handleCardAddition={handleCardAddition}
              getMyStateAddition={getMyStateAddition}
              handleDeckAddition={handleDeckAddition}
              handleDeckDeletation={handleDeckDeletation}
              handleGetScore={handleGetScore}
              getScoreCalculation={getScoreCalculation}
              mystate={mystate}
            />
          )}
        />

        <Tab.Screen
          name="AddDeck"
          children={(props) => (
            <HomeStackScreen
              {...props}
              handleCardAddition={handleCardAddition}
              getMyStateAddition={getMyStateAddition}
              handleDeckAddition={handleDeckAddition}
              handleDeckDeletation={handleDeckDeletation}
              handleGetScore={handleGetScore}
              getScoreCalculation={getScoreCalculation}
              mystate={mystate}
            />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
