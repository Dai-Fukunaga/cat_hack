import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles.js";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World!</Text>
        <Button
          title="Go to InvoiceEdit"
          onPress={() => this.props.navigation.navigate("InvoiceEdit")}
        />
        <Button
          title="Go to Summary"
          onPress={() => this.props.navigation.navigate("Summary")}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default HomeScreen;
