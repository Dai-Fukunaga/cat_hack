import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const colors = {
  primary: "#555555",
  deck: "lightgray",
  deck_button: "#999999",
  backgroundColor: "white",
  fccolor: "white",
  // text that is white in default:
  w_text: "white",
  // text that is black in default:
  b_text: "black",
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    //width: "95%",
  },
  default_font: {
    color: colors.w_text,
    fontSize: 20,
  },
  deck_button_container: {
    flexDirection: 'row',
    alignSelf: "flex-end",
  },
  h_button: {
    backgroundColor: colors.primary,
    margin: 5,
    borderRadius: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deck_button: {
    backgroundColor: colors.deck_button,
    margin: 5,
    marginTop: 25,
    borderRadius: 5,
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wide_button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: width * 0.8,
    alignItems: "center",
  },
  deck_container: {
    backgroundColor: colors.deck,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
    borderRadius: 5,
    width: width * 0.85,
    height: 130,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
  },
  deck_name: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 24,
    margin: 10,
    color: '#333333',
  },
  containerCreate1: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
    marginBottom: 0,
  },
  containerScroll: {
    flexGrow: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    //height: '20%',

  },
  p_container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
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
    backgroundColor: colors.fccolor,
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
