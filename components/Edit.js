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
        <Text style={styles.deck_name}>{item[0]}</Text>
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
    // <View style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.tbl}>
    //     <View>
    //       <View style={{ flexDirection: 'row', }}>
    //         {/* Header of the Table */}
    //         <Text style={styles.th}>Front</Text>
    //         <Text style={styles.th}>Back</Text>
    //       </View>
    //       {deck.map(([term, def], index) => (
    //         <View key={index} style={{ ...styles.tbl, borderWidth: 1, }}>
    //           {/* Term with Touchable Opacity iterated */}
    //           <TouchableOpacity style={styles.card}><Text style={styles.card}>{term}</Text></TouchableOpacity>
    //           {/* Def iterated */}
    //           <TouchableOpacity style={styles.card}><Text style={styles.card}>{def}</Text></TouchableOpacity>
    //         </View>
    //       ))}
    //     </View>
    //   </ScrollView>
    //   <Button title="Save" style={{ top: 0, }} onPress={() => { update() }}></Button>
    //   <StatusBar style="auto" />
    // </View>
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
