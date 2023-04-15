import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../styles.js";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Create Set"
          onPress={() => this.props.navigation.navigate("Create")}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Home;
