import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Style from "./Style.js";

import HomeScreen from "./screens/HomeScreen.jsx";
import { URLCharacters } from "./utils/urls/urlCharacters";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import CharactersScreen from "./screens/CharactersScreen.jsx";
import ArcsScreen from "./screens/ArcsScreen.jsx";
import NewsScreen from "./screens/NewsScreen.jsx";

const url = "https://avatarfiles.alphacoders.com/257/thumb-150-257365.jpg";

// const Stack = createNativeStackNavigator();
// console.log("Stack", Stack);

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = createNativeStackNavigator();

const App = ({ navigation }) => {
  const [loading, setloading] = useState(true);

  const [state, setState] = useState("");

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        DBZ: require("./assets/fonts/Saiyan-Sans.ttf"),
      });
      setloading(false); //flag pour annoncer la fin du chargement
    } catch (e) {
      console.error("erreur", e);
    }
  };

  useEffect(() => {
    //Appel à la fonction loadFont

    loadFont();
    console.log("platform", Platform.OS);
  }, []);
  const fetchBurgers = async () => {
    try {
      const { data } = await axios.get(URLBURGER.fetchBurger);
      setBurgers(data);
    } catch (error) {
      console.log(error.message());
    }
    console.log(burgers);
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="Arcs" component={ArcsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Pour pouvoir créer une une seule partie scrollable
/* <FlatList data={posts} 
renderItem={(item) => <Text style={styles.item}>{item.item.title}</Text>}
keyExtractor={item => item.id.toString()} 
/>

//keyExtractor va nous permettre de récupérér une clé */
//en REACT et surout en Js chaque élmnt enfant doit avoir une propriété key (clé unique dans le tab)

export default App;
