import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles.js";

class Edit extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Edit</Text>
        <Button
          title="Edit"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Edit;
