import { StyleSheet } from "react-native";
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
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    height: '15%',
  },
  containerScroll: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
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
