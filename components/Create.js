
import { StatusBar } from "expo-status-bar";
import React, { memo, useState } from "react";
import { Button, Text, View, ScrollView, SafeAreaView, TextInput } from "react-native";
//import styles from "../styles.js";
import { registerRootComponent } from 'expo';
<<<<<<< HEAD

// stylesheet
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const Create = memo((props) => {
  const addCard = () => {
    console.log("Hello");
  };

  return (
    <View style={styles.container}>
      {/* Title Edit */}
      <View style={styles.containerCreate1}>
        <View style={{
          top: 0,
          flexDirection: 'row',
          paddingTop: 10,
          borderWidth: 1,
        }}>
          <Text style={styles.header1}>Title: </Text>
          <TextInput style={styles.titleInput} />
        </View>
      </View >
      {/* Buttons */}
      <View style={styles.containerCreate2}>
        <Button title="+ Card" color="#fff" style={styles.btn}
          onPress={addCard}></Button>
        <Button title="Save & Close" color="#fff" style={styles.btn}></Button>
      </View>
      {/* Scroll View Flash Cards */}
      <View style={{ ...styles.container, zIndex: -1 }}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={{
            marginBottom: 400,
          }}>
            <Text style={styles.header1}>Front</Text>
            <TextInput style={styles.input} />
            <Text style={styles.header1}>Back</Text>
            <TextInput style={styles.input} />
          </View>

        </ScrollView>
      </View>
      <StatusBar style="auto" />
=======
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
    if (front !== "" && back !== "") {
      addCards();
    }
    try {
      await AsyncStorage.setItem('decks', JSON.stringify({ ...oldDecks, ...newDeck }));
    } catch (e) {
      console.log(e);
    }
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
>>>>>>> main
    </View>
  );
});

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCreate1: {
    flex: 1,
    position: 'absolute',
    top: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    height: '10%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  containerCreate2: {
    flex: 1,
    position: 'absolute',
    top: '10%',
    backgroundColor: "#ccc",
    borderWidth: 1,
    height: '10%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    paddingTop: 10,
    borderWidth: 1,
    width: '100%',
  },
  containerScroll: {
    top: '20%',
    //position: 'relative',
    flexGrow: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    zIndex: -1,
  },
  scrollView: {
    backgroundColor: 'white',
    borderWidth: 1,
    height: '100%',
    transform: [{ translateZ: -1 }],

  },
  header1: {
    fontSize: 20,
    paddingTop: 0,
    marginTop: 0,
  },
  titleInput: {
    width: '80%',
    height: '100%',
    borderWidth: 1,
    alignItems: 'center',
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: 'white',

    margin: 20,
    borderRadius: 10,
    borderColor: 'gray',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
    height: 100,
    width: 300,
    // padding: 10,
  },
  btn: {
    //width: '30%',
    //height: '50%',
    //top: 0,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#aaf",

  },
});
