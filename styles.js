import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  p_container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  p_description: {
    alignSelf: "flex-start",
    fontSize: 20,  // adjust to your liking
    fontWeight: '600',  // adjust to your liking
    color: 'black',  // or any other color that has enough contrast with the background
    marginBottom: 8,  // add some spacing between the subtitle and the next element
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
});
