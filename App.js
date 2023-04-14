import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from "react-native";
import Quiz from './Quiz';

export default function App() {
  const FlashCard = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Flash Card</Text>
        <Text style={styles.text}>This is some example text.</Text>
      </View>
    );
  };

  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Quiz style={styles.fc_container} />
      <View style={styles.fc_container}>

        <Text style={styles.title}>My Flash Card</Text>
        <Text style={styles.text}>pretend like there's something written in here.</Text>

      </View>
      <View style={styles.fc_container}>

        <Text style={styles.title}>My Second Flash Card</Text>
        <Text style={styles.text}>pretend like there's something written in here.</Text>

      </View>
      <Text numberOfLines={1} onPress={handlePress}>
        Tabito dayon aaa afafawefaiefawiefaw aeica ieafi afela ahfiahei a ssuogi nagaaiiaii

      </Text>
      <Button
        onPress={handlePress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <TouchableOpacity>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("./assets/icon.png")} />
        <StatusBar style="auto" />
      </TouchableOpacity>
    </SafeAreaView >
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fc_container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: 'gray',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
    width: "90%",
    height: "20%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
