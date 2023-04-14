import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles.js";

class Create extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Create</Text>
        <Button
          title="Create"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Create;
