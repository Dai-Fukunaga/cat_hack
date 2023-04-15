import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  p_container: {
    flex: 0.8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  p_description: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    margin: 8,
  },
  p_tandm: {
    fontSize: 20,
    fontWeight: '400',
    margin: 8,
  },
  p_button: {
    flex: 0.2
  },
  fc_container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
    width: "90%",
    height: "20%",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
});
