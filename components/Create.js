
import { StatusBar, useState, memo } from "expo-status-bar";
import React from "react";
import { Button, Text, View, ScrollView, SafeAreaView } from "react-native";
import styles from "../styles.js";
import { registerRootComponent } from 'expo';


const Create = memo((props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Front</Text>
      {/* <TextInput
        style={styles.input}

      /> */}
      <Text style={styles.header1}>Back</Text>


      {/* <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <Text></Text>
        </ScrollView>
      </SafeAreaView> */}

      {/* <Text>Create</Text>
        <Button
          title="Create"
          onPress={() => this.props.navigation.navigate("Home")}
        /> */}
      <StatusBar style="auto" />
    </View>
  );
});

export default Create;
