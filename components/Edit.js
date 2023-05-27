import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
//import styles from "../styles.js";
import { memo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Edit = memo((props) => {
  // const deck_dict = { "decks": { "deck1": [[1, 2], [3, 4]], "deck2": [[5, 6], [7, 8]] } };
  // const cards = { "deck1": [["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"]] };
  const arr = [["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"], ["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"], ["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"], ["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"], ["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"], ["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"], ["asdfghjkl;", "qwertyuiop"], ["drtyhjk,", ",majsuderifogl"], ["polkmnbvcxser", "1234567890"]];
  //decks_dict["decks"]
  //Controls if Show meaning is pressed or not
  //const [showMeaning, setShowMeaning] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Close" style={{
        top: 0,
      }}></Button>
      <ScrollView contentContainerStyle={styles.tbl}>
        <View>
          <View style={{ flexDirection: 'row', }}>
            {/* Header of the Table */}
            <Text style={styles.th}>Term</Text>
            <Text style={styles.th}>Def</Text>
          </View>
          {arr.map(([term, def], index) => (
            <View key={index} style={{ ...styles.tbl, borderWidth: 1, }}>
              {/* Term with Touchable Opacity iterated */}
              <TouchableOpacity style={styles.card}><Text style={styles.card}>{term}</Text></TouchableOpacity>
              {/* Def iterated */}
              <TouchableOpacity style={styles.card}><Text style={styles.card}>{def}</Text></TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView >
      <StatusBar style="auto" />
    </View >
  );
});

export default Edit;

const styles = StyleSheet.create({
  card: { width: '50%', alignItems: "center", justifyContent: "center", },
  tcop: { width: '50%', },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    //width: "95%",
  },
  th: { width: '50%', fontWeight: "bold", borderWidth: 1, },
  tbl: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    width: '100%',
  },
});
