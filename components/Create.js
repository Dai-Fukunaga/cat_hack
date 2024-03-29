
import { StatusBar } from "expo-status-bar";
import React, { memo, useState } from "react";
import { Button, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from "react-native";
import styles from "../styles.js";
import { registerRootComponent } from 'expo';
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get('window');

const Create = memo((props) => {
  const [deckName, setDeckName] = useState("");
  const [tmpName, setTmpName] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [deck, setDeck] = useState([]);
  const [warning, setWarning] = useState(false);
  const [deckNameWarning, setDeckNameWarning] = useState(false);

  // add card to deck
  const addCards = () => {
    setDeck([...deck, [front, back]]);
    setFront("");
    setBack("");
  }

  const { setData } = props.route.params;

  // get deck data from the async storage
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

  // update the deck data to the async storage
  const update = async () => {
    let cards = [...deck];
    if (front.length !== 0 && back.length !== 0) {
      if (cards.length === 0) {
        cards = [[front, back]];
      } else {
        cards.push([front, back]);
        setDeck(cards);
      }
    }
    const oldDecks = await getData();
    const newDeck = { [deckName]: cards };
    setFront("");
    setBack("");
    try {
      await AsyncStorage.setItem('decks', JSON.stringify({ ...oldDecks, ...newDeck }));
    } catch (e) {
    }
    setData();
    props["navigation"].goBack();
  }

  return (
    <View style={styles.p_container}>
      {/* if deck name is defined */}
      {deckName !== "" && (
        <>
          <Text style={styles.create_deck_name}>{deckName}</Text>
          {(deck.length >= 1 || (front.length !== 0 && back.length !== 0)) && (
            <TouchableOpacity style={styles.save_button} onPress={() => {
              update();
            }}>
              <Text style={styles.default_font}>Save Deck</Text>
            </TouchableOpacity>
          )}
          {!(deck.length >= 1 || (front.length !== 0 && back.length !== 0)) && (
            <TouchableOpacity style={{ ...styles.save_button, backgroundColor: "#DDDDDD" }} onPress={() => {
            }}>
              <Text style={styles.default_font}>Save Deck</Text>
            </TouchableOpacity>
          )}
          <View style={styles.fc_container}>
            <TextInput style={styles.p_tandm} placeholder="Enter front" onChangeText={setFront} value={front}></TextInput>
          </View>
          <Text style={styles.p_description}>Front</Text>
          <View style={styles.fc_container}>
            <TextInput style={styles.p_tandm} placeholder="Enter back" onChangeText={setBack} value={back}></TextInput>
          </View>
          <Text style={styles.p_description}>Back</Text>
          {warning && (
            <>
              <Text style={{ color: 'red' }}>Fill out both sides of the cards</Text>
            </>
          )}
          <View style={styles.p_button}>
            <TouchableOpacity style={styles.wide_button} onPress={() => {
              if (front !== "" && back !== "") {
                addCards();
                setWarning(false);
              } else {
                setWarning(true);
              }
            }}>
              <Text style={styles.default_font}>Add Card</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </>
      )
      }
      {/* if deck name is undefined */}
      {deckName === "" && (
        <>
          <Text style={{ ...styles.create_deck_name, alignSelf: 'center' }}>Deck Name</Text>
          <View style={styles.fc_container}>
            <TextInput style={styles.p_tandm} placeholder="Enter deck name" onChangeText={setTmpName}></TextInput>
          </View>
          {warning && (
            <>
              <Text style={{ color: 'red' }}>Please input the deck name</Text>
            </>
          )}
          {deckNameWarning && (
            <>
              <Text style={{ color: 'red' }}>Deck name already exists</Text>
            </>
          )}
          <View style={styles.p_button}>
            <TouchableOpacity style={styles.wide_button} onPress={async () => {
              if (tmpName === "") {
                setWarning(true);
              } else {
                const oldDecks = await getData();
                if (tmpName in oldDecks) {
                  setDeckNameWarning(true);
                } else {
                  setDeckName(tmpName);
                  setDeckNameWarning(false);
                }
                setWarning(false);
              }
            }}>
              <Text style={styles.default_font}>Make a new deck</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
});

export default Create;
