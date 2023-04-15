
import { StatusBar, useState } from "expo-status-bar";
import React, { memo } from "react";
import { Button, Text, View, ScrollView, SafeAreaView, TextInput } from "react-native";
import styles from "../styles.js";
import { registerRootComponent } from 'expo';


const Create = memo((props) => {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        height: "15%",
        padding: 20,
      }}>
        <Text style={styles.header1}>Title: </Text>
        <TextInput style={{
          width: '80%',
          height: '35%',
          borderWidth: 1,
          alignItems: 'center',
        }} />
      </View>

      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <Text style={styles.header1}>Front</Text>
          <TextInput style={styles.input} />
          <Text style={styles.header1}>Back</Text>
          <TextInput style={styles.input} />
        </ScrollView>
      </SafeAreaView>

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
