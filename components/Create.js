
import { StatusBar } from "expo-status-bar";
import React, { memo, useState } from "react";
import { Button, Text, View, ScrollView, SafeAreaView, TextInput } from "react-native";
import styles from "../styles.js";
import { registerRootComponent } from 'expo';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Create = memo((props) => {
  const [deckName, setDeckName] = useState("");
  const [tmpName, setTmpName] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [deck, setDeck] = useState([]);

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
    const oldDecks = await getData();
    const newDeck = { [deckName]: deck };
    if (front !== "" && back !== "") {
      addCards();
    }
    try {
      await AsyncStorage.setItem('decks', JSON.stringify({ ...oldDecks, ...newDeck }));
    } catch (e) {
      console.log(e);
    }
    setData();
  }

  return (
    <View style={styles.p_container}>
      {/* if deck name is defined */}
      {deckName !== "" && (
        <>
          <Text>{deckName}</Text>
          <Text style={styles.p_description}>Front</Text>
          <View style={styles.fc_container}>
            <TextInput style={styles.p_tandm} placeholder="Enter front" onChangeText={setFront} value={front}></TextInput>
          </View>
          <Text style={styles.p_description}>Back</Text>
          <View style={styles.fc_container}>
            <TextInput style={styles.p_tandm} placeholder="Enter back" onChangeText={setBack} value={back}></TextInput>
          </View>
          <View style={styles.p_button}>
            <Button title="Add Cards" onPress={addCards}></Button>
            <Button title="Save" onPress={() => { update(); props["navigation"].goBack(); }}></Button>
          </View>
          <StatusBar style="auto" />
        </>
      )}
      {/* if deck name is undefined */}
      {deckName === "" && (
        <>
          <Text style={styles.p_description}>Deck Name</Text>
          <View style={styles.fc_container}>
            <TextInput style={styles.p_tandm} placeholder="Enter deck name" onChangeText={setTmpName}></TextInput>
          </View>
          <View style={styles.p_button}>
            <Button title="Make a new deck" onPress={() => { setDeckName(tmpName) }}></Button>
          </View>
        </>
      )}
    </View>
  );
});

export default Create;
