import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerScroll: {
    flexGrow: 1,
    backgroundColor: "#fff",
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
    marginHorizontal: 20,
  },
  header1: {
    fontSize: 32,
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
  input:{
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
  }
});
