import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles.js";

class Practice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Practice</Text>
        <Button
          title="Deck Name"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Practice;