import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { memo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import styles from "../styles.js";
import { AntDesign, Feather } from '@expo/vector-icons';

const Edit = memo((props) => {
  var { setData, deck, deckName } = props.route.params;
  console.log({ [deckName]: deck });

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

  const update = async () => {
    const oldDecks = await getData();
    const newDeck = { [deckName]: deck };
    try {
      await AsyncStorage.setItem("decks", JSON.stringify({ ...oldDecks, ...newDeck }));
    } catch (e) {
    }
    setData();
    props["navigation"].goBack();
  }

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <TouchableOpacity style={styles.deck_container}>
        <Text>Front: {item[0]}  Back: {item[1]}</Text>
        <View style={styles.deck_button_container}>
          {/* edit button */}
          <TouchableOpacity
            style={styles.deck_button}
            onPress={() => { }}
          >
            <AntDesign name="edit" size={30} color="#555555" />
          </TouchableOpacity>
          {/* trash button */}
          <TouchableOpacity
            style={[styles.deck_button, { backgroundColor: 'red' }]}
            onPress={() => { }}
          >
            <Feather name="trash-2" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={deck}
        renderItem={renderItem}
        keyExtractor={(deckName) => deckName}
      />
      <Button title="Save" style={{ top: 0, }} onPress={() => { update() }}></Button>
      <StatusBar style="auto" />
    </View>
  );
});

export default Edit;
