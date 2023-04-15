import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles.js";


const Practice = memo((props) => {
  return (
    <View style={styles.practice_container}>

      <Text style={styles.p_description}>Term</Text>
      <View style={styles.fc_container}>
        <Text style={styles.p_tandm}>日本</Text>
      </View>
      <Text style={styles.p_description}>Meaning</Text>
      <View style={styles.fc_container}>
        <Text style={styles.p_tandm}>Japan</Text>
      </View>
      {/*gomi code below*/}
      <View style={{ marginTop: 250 }}></View>
      <Button
        title="Deck Name"
        onPress={() => this.props.navigation.navigate("Home")}
        style={styles.p_button}
      />
      <StatusBar style="auto" />
    </View >
  );
});

export default Practice;
