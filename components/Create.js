
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

  const addCards = () => {
    setDeck([...deck, [front, back]]);
    setFront("");
    setBack("");
  }

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

  const update = async () => {
    const oldDecks = await getData();
    const newDeck = { [deckName]: deck };
    try {
      await AsyncStorage.setItem('decks', JSON.stringify({ ...oldDecks, ...newDeck }));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.p_container}>
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
