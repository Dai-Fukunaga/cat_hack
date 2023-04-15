import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    //width: "95%",
  },
  containerCreate1: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    height: '15%',
    //width: '85%',
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
    marginBottom: 0,
  },
  containerScroll: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    //height: '20%',

  },
  p_container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,

  },
  p_description: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    margin: 8,
  },
  p_tandm: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    margin: 8,
  },
  p_button: {
    position: 'absolute',
    bottom: 75,
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
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: 'white',
    borderWidth: 1,

    //marginHorizontal: 20,
  },
  header1: {
    fontSize: 20,
    paddingTop: 0,
    marginTop: 0,
  },
  titleInput: {
    width: '75%',
    height: '100%',
    borderBottomWidth: 1,
    alignItems: 'center',
    fontSize: 20,
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
