
import { StatusBar, useState } from "expo-status-bar";
import React, { memo } from "react";
import { Button, Text, View, ScrollView, SafeAreaView, TextInput } from "react-native";
//import styles from "../styles.js";
import { registerRootComponent } from 'expo';

// stylesheet
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');




const Create = memo((props) => {
  return (
    <View style={styles.containerCreate1}>
      <View style={{
        flexDirection: 'row',
        height: "5%",
        paddingTop: 10,
        //borderWidth: 1,
      }}>
        <Text style={styles.header1}>Title: </Text>
        <TextInput style={styles.titleInput} />
      </View>

      {/* <SafeAreaView style={styles.container}> */}
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.containerCreate1}>
          <View style={{
            flexDirection: 'row',
            height: "20%",
            paddingTop: 10,
            borderWidth: 1,
            width: '100%',
          }}>
            <Button title="Add Card"></Button>
            <Button title="Close"></Button>
          </View>
        </View>

        <Text style={styles.header1}>Front</Text>
        <TextInput style={styles.input} />
        <Text style={styles.header1}>Back</Text>
        <TextInput style={styles.input} />
      </ScrollView>
      {/* </SafeAreaView> */}

      {/* <Text>Create</Text>
        <Button
          title="Create"
          onPress={() => this.props.navigation.navigate("Home")}
        /> */}
      <StatusBar style="auto" />
    </View >
  );
});

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    //width: "95%",
  },
  containerCreate1: {
    flex: 1,
    backgroundColor: "#fff",
    //borderWidth: 1,
    height: '15%',
    //width: '85%',
    alignItems: "center",
    justifyContent: "center",
  },
  containerScroll: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    marginTop: 0,
    height: '75%',
  },
  scrollView: {
    backgroundColor: 'white',
    borderWidth: 1,
    height: '75%',
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

    margin: 10,
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
  }
});
