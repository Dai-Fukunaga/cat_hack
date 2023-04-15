import { StatusBar } from "expo-status-bar";
import { Button, Text, View, FlatList, ListItem, StyleSheet, Icon, Body } from "react-native";
import React, { useState, memo } from "react";
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../styles.js";


const Home = memo((props) => {
  // save deck data
  const [decks, setDecks] = useState({});

  // get deck data from async storage
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('decks');
      if (value !== null) {
        return JSON.parse(value);
      } else {
        return {};
      }
    } catch (e) {
    }
  }

  // set the data to decks
  const setData = async () => {
    const data = await getData();
    try {
      setDecks(data);
    } catch (e) {
    }
  }

  // update the decks data
  setData();

  // print all deck names
  const PrintDeck = memo((props) => {
    const { decks } = props;
    const deckNames = Object.keys(decks);

    // shuffle deck
    const shuffleArray = (array) => {
      let newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    // render all deck
    const renderItem = ({ item }) => (
      <View style={{ padding: 5 }}>
        <Button
          title={item}
          onPress={() => {
            props.navigation.navigate("Practice", shuffleArray(decks[item]));
          }}
          style={{ fontSize: 20 }}
        />
      </View>
    );

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
      <View style={styles.editButton}>
        <Button
          title="Edit"
          onPress={() => props.navigation.navigate("Edit")}
        />
        <Button title="Create" onPress={() => props.navigation.navigate("Create")}></Button>
      </View>
      <PrintDeck decks={decks} navigation={props.navigation} />
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
  },
  editButton: {
    alignItems: "flex-end",
    width: "0%"
  }
});
