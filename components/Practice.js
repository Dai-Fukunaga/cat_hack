import { StatusBar } from "expo-status-bar";
import React, { memo, useState } from "react";
import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import styles from "../styles.js";

const { width, height } = Dimensions.get('window');

const ShowProblem = (params) => {
  const [showMeaning, setShowMeaning] = useState(false);
  const [index, setIndex] = useState(0);

  const handleNextCard = (props) => {
    setShowMeaning(false);
    const newindex = (index + 1) % params["deck"].length;
    if (newindex == 0) {
      console.log("congratulations");
      params["props"]["navigation"].goBack();
    }
    setIndex(newindex);
  };

  const handleShowMeaning = () => {
    setShowMeaning(true);
  };

  return (
    <View style={styles.p_container}>
      <Text style={styles.p_description}>Front</Text>
      <View style={styles.fc_container}>
        <Text style={styles.p_tandm}>{params["deck"][index][0]}</Text>
      </View>
      {showMeaning && (
        <>
          <Text style={styles.p_description}>Back</Text>
          <View style={styles.fc_container}>
            <Text style={styles.p_tandm}>{params["deck"][index][1]}</Text>
          </View>
        </>
      )}
      <View style={styles.p_button}>
        <TouchableOpacity style={styles.wide_button} onPress={showMeaning ? handleNextCard : handleShowMeaning}>
          <Text style={styles.default_font}>{showMeaning ? "Next Card" : "Show Back"}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
};

const Practice = memo((props) => {
  return (
    <ShowProblem deck={props.route.params} props={props}></ShowProblem>
  );
});

export default Practice;
