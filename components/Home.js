import { StatusBar } from "expo-status-bar";
import { Button, Text, View, FlatList, ListItem, StyleSheet, Icon, Body } from "react-native";
import React, { useState, memo } from "react";
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../styles.js";


const Home = memo((props) => {
  const [decks, setDecks] = useState({});
  // const addDeck = async (deck) => {
  //   try {
  //     await AsyncStorage.setItem('decks', deck);
  //   } catch (e) {
  //     // saving error
  //   }
  // }

  // const getDeck = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('decks');
  //     setStr(jsonValue);
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value
  //   }
  // }

  const deck_dict = { "decks": { "deck1": [["1", "2"], ["3", "4"]], "deck2": [["5", "6"], ["7", "8"]] } };

  const PrintDeck = memo((props) => {
    const { decks } = props;
    const deckNames = Object.keys(decks);

    const shuffleArray = (array) => {
      let newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const renderItem = ({ item }) => (
      <View style={{ padding: 10 }}>
        <Button
          title={item}
          onPress={() => {
            props.navigation.navigate("Practice", shuffleArray(decks[item]));
          }}
          style={{ fontSize: 20 }}
        />
      </View>
    );

    const handleButtonPress = () => {
      console.log("Button clicked!");
    }

    return (
      <FlatList
        data={deckNames}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    );
  })

  return (
    <View style={styles.container}>
      <Button
        title="Edit"
        onPress={() => props.navigation.navigate("Edit")}
      />
      <PrintDeck decks={deck_dict["decks"]} navigation={props.navigation} />
      {/* <Button title="test" icon="login" onPress={() => storeData("tst")} >test</Button>
      <Button title="get" onPress={() => getData()}></Button>
      <Text>{str}</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
});

export default Home;


const style = StyleSheet.create({
  listView: {
    flex: 1,
  },
  icon: {
    color: 'grey',
  },
  checkbox: {
    color: 'grey',
    fontSize: 20,
  }
});
