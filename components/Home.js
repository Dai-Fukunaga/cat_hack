import { StatusBar } from "expo-status-bar";
import { Button, Text, View, FlatList, ListItem, StyleSheet, Icon, Body, TouchableOpacity } from "react-native";
import React, { useState, memo } from "react";
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../styles.js";
import { AntDesign, Feather } from '@expo/vector-icons';

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
      <View style={{ padding: 10 }}>
        {/* the deck button */}
        <TouchableOpacity
          style={styles.deck_container}
          onPress={() => {
            props.navigation.navigate("Practice", shuffleArray(decks[item]));
          }}
        >
          <Text style={styles.deck_name}>{item}</Text>

          <View style={styles.deck_button_container}>

            {/* edit button */}
            <TouchableOpacity
              style={styles.deck_button}
              onPress={() => props.navigation.navigate("Edit")}
            >
              <AntDesign name="edit" size={30} color="#555555" />
            </TouchableOpacity>

            {/* trash button */}
            <TouchableOpacity
              style={[styles.deck_button, { backgroundColor: 'red' }]}
              onPress={() => props.navigation.navigate("Edit")}
            >
              <Feather name="trash-2" size={30} color="white" />
            </TouchableOpacity>

          </View>

        </TouchableOpacity>
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
      {/* Plus Button */}
      <TouchableOpacity
        style={styles.h_button}
        onPress={() => props.navigation.navigate("Create")}
      >
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>
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
