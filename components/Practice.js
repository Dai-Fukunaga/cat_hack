import { StatusBar } from "expo-status-bar";
import React, { memo, useState } from "react";
import { Button, Text, View, Dimensions } from "react-native";
import styles from "../styles.js";

const { width, height } = Dimensions.get('window');

const Practice = memo((props) => {

  const deck_dict = { "decks": { "deck1": [[1, 2], [3, 4]], "deck2": [[5, 6], [7, 8]] } };
  //decks_dict["decks"]
  //Controls if Show meaning is pressed or not
  const [showMeaning, setShowMeaning] = useState(false);

  const handleShowMeaning = () => {
    setShowMeaning(true);
  };

  const handleNextCard = () => {
    setShowMeaning(false);
    // do something else
    console.log("next card pressed")
  };

  return (
    <View style={styles.p_container}>
      <Text style={styles.p_description}>Term</Text>
      <View style={styles.fc_container}>
        <Text style={styles.p_tandm}>日本aklsebflawjfblawifblawibefawbilfbawfbliaew</Text>
      </View>
      {showMeaning && (
        <>
          <Text style={styles.p_description}>Meaning</Text>
          <View style={styles.fc_container}>
            <Text style={styles.p_tandm}>Japan</Text>
          </View>
        </>
      )}
      {/* make button location absolute*/}
      <View style={styles.p_button}>
        <Button
          title={showMeaning ? "Next Card" : "Show Meaning"}
          onPress={showMeaning ? handleNextCard : handleShowMeaning}
        />
      </View>
      <StatusBar style="auto" />
    </View >
  );
});

export default Practice;
