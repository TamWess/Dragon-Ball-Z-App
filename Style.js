import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

const Styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerCharactersPage: {
    height: "100%",
    width: "100%",
    // margin: 100,
    // backgroundColor: "white",
    backgroundImage: "url(../assets/img/home-background.jpg)",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerCharacters: {
    
    width: "70%",
    backgroundImage: "url(../assets/img/home-background.jpg)",
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    marginTop: 20,
	marginBottom: 20,
    textIndent: 4,
    borderRadius: 15,
    borderWidth: 1,
    width: 200,
    height: 30,
    color: "#fff",
  },
  logo: {
    marginTop: 20,
    height: 85,
    width: 85,
    borderRadius: 10,
  },
  policeDBZ: {
    fontFamily: "DBZ",
    color: "#DB0700",
    fontSize: 70,
  },
  titreZ: {
    // textShadow: "20 #ff0000",
    marginTop: 10,
    fontFamily: "DBZ",
    color: "#DB0700",
    fontSize: 70,
  },
  titreapp: {
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "DBZ",
    color: "#DB0700",
    fontSize: 50,
  },
  Lets: {
    // boxShadow: "6px 6px 10px black",
	height: 40,
	marginBottom: 15,
    textAlign: "center",
    fontFamily: "DBZ",
    color: "#FFAB00",
    fontSize: 30,
  },
  Bouton: {
    width: "40%",
    backgroundColor: "Green",
    displayFlex: "flex",
    justifyContent: "center",
    marginTop: 20,
  },

  header: {
    backgroundColor: "orange",
    borderWidth: 3,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});

export default Styles;
