import React, { useState, useEffect } from "react";
import Styles from "../Style.js";
import * as Font from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
// import "./san-cho-burgers.scss";

import { URLCharacters } from "../utils/urls/urlCharacters.js";

import SonGokuScreen from "./Characters/Bio.jsx";

import {
  View,
  Text,
  StylesSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import LOGO from "../assets/img/thumbmails/goku-thumbmail.jpg";
import LOGOVEGETA from "../assets/img/thumbmails/vegeta-thumbmail.jpg";
import LOGOCELL from "../assets/img/thumbmails/cell-thumbmail.jpg";
import LOGOFREEZER from "../assets/img/thumbmails/freezer-thumbmail.jpg";
import LOGOBUU from "../assets/img/thumbmails/buu-thumbmail.jpg";
import LOGOSAYANGOKU from "../assets/img/thumbmails/goku-thumbmail.jpg";
import LOGOSAYANGOHAN from "../assets/img/thumbmails/gohan-thumbmail.jpg";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bio from "./Characters/Bio.jsx";

const Stack = createNativeStackNavigator();

const CharactersScreen = ({ navigation }) => {
  const [loading, setloading] = useState(true);
  const [state, setState] = useState("");
  const [characters, setCharacters] = useState([]);
  const name = "gohan";
  const [perso, setPerso] = useState("");

  let okay = "../assets/img/Buu.jpg";

  const goBio = () => {
    navigation.navigate("CharactersBio", { name });
  };

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        DBZ: require("../assets/fonts/Saiyan-Sans.ttf"),
      });
      setloading(false); //flag pour annoncer la fin du chargement
    } catch (e) {
      console.error("erreur", e);
    }
  };

  useEffect(() => {
    const fetchCharactersAvatars = async () => {
      try {
        const { data } = await axios.get(URLCharacters.fetchCharacters);
        setCharacters(data);
      } catch (error) {
        console.log(error.message());
      }
      console.log(characters);
    };
    fetchCharactersAvatars();

    //Appel à la fonction loadFont
    loadFont();
    console.log("platform", Platform.OS);
  }, []);
  console.log("BONJOUR DBZ");

  return (
    //FlatList et ScrollView ne sont pas compatibles

    <ScrollView>
      <ImageBackground
        source={require("../assets/img/characters-background.jpg")}
        style={Styles.containerCharactersPage}
      >
        <Text style={Styles.policeDBZ}>Z</Text>
        <Text style={Styles.Lets}>Let's know better your heroes!!!</Text>

        <TextInput
          style={Styles.input}
          placeholder="Rechercher..."
          value={state}
          onChangeText={(value) => setState(value)}
        ></TextInput>
        <View style={Styles.containerCharacters}>
          {/* Tentative fetch Characters Avatars  */}
          {characters.map((item) => (
            <React.Fragment key={item._id}>
              {}
              <View>
                <TouchableOpacity
                  onPress={() => {
                    characters, goBio;
                  }}
                >
                  <Image style={Styles.logo} source={item.thumbmail} />
                </TouchableOpacity>
              </View>
            </React.Fragment>
          ))}

          {/* -------------------------------------------------------------------------------------------------- */}
          {/* <Image style={Styles.logo} source={"../assets/img/Buu.jpg"}></Image> */}

          <TouchableOpacity onPress={goBio}>
            <Image style={Styles.logo} source={LOGOSAYANGOHAN} />
          </TouchableOpacity>
          <Image style={Styles.logo} source={LOGO}></Image>
          <Image style={Styles.logo} source={LOGOVEGETA}></Image>
          <Image style={Styles.logo} source={LOGOFREEZER} />
          <Image style={Styles.logo} source={LOGOCELL}></Image>
          <Image style={Styles.logo} source={LOGOBUU} />
          <Image style={Styles.logo} source={LOGOSAYANGOKU}></Image>
          <Image style={Styles.logo} source={LOGOSAYANGOHAN} />
          <Image style={Styles.logo} source={LOGO}></Image>
          <Image style={Styles.logo} source={LOGOVEGETA}></Image>
          <Image style={Styles.logo} source={LOGOFREEZER} />
          <Image style={Styles.logo} source={LOGOCELL}></Image>
          <Image style={Styles.logo} source={LOGOBUU} />
          <Image style={Styles.logo} source={LOGOSAYANGOKU}></Image>
          <Image style={Styles.logo} source={LOGOSAYANGOHAN} />
          <Image style={Styles.logo} source={LOGO}></Image>
          <Image style={Styles.logo} source={LOGOVEGETA}></Image>
          <Image style={Styles.logo} source={LOGOFREEZER} />
          <Image style={Styles.logo} source={LOGOCELL}></Image>
          <Image style={Styles.logo} source={LOGOBUU} />
          <Image style={Styles.logo} source={LOGOSAYANGOKU}></Image>
          <Image style={Styles.logo} source={LOGOSAYANGOHAN} />
          <Image style={Styles.logo} source={LOGOFREEZER} />
          <Image style={Styles.logo} source={LOGOCELL}></Image>
          <Image style={Styles.logo} source={LOGOBUU} />
          <Image style={Styles.logo} source={LOGOSAYANGOKU}></Image>
          <Image style={Styles.logo} source={LOGOSAYANGOHAN} />
          <Image style={Styles.logo} source={LOGO}></Image>
          <Image style={Styles.logo} source={LOGOVEGETA}></Image>
          <Image style={Styles.logo} source={LOGOFREEZER} />
          <Image style={Styles.logo} source={LOGOCELL}></Image>
          <Image style={Styles.logo} source={LOGOBUU} />
          <Image style={Styles.logo} source={LOGOSAYANGOKU}></Image>
          <Image style={Styles.logo} source={LOGOSAYANGOHAN} />
          <Image style={Styles.logo} source={LOGO}></Image>
          <Image style={Styles.logo} source={LOGO}></Image>
          <Image style={Styles.logo} source={LOGOVEGETA}></Image>
          <Image style={Styles.logo} source={LOGOFREEZER} />
          <Image style={Styles.logo} source={LOGOCELL}></Image>
          <Image style={Styles.logo} source={LOGOBUU} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const Characters = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CharactersList" component={CharactersScreen} />
      <Stack.Screen name="CharactersBio" component={Bio} />
    </Stack.Navigator>
  );
};

// Pour pouvoir créer une une seule partie scrollable
/* <FlatList data={posts} 
renderItem={(item) => <Text style={Styles.item}>{item.item.title}</Text>}
keyExtractor={item => item.id.toString()} 
/>

//keyExtractor va nous permettre de récupérér une clé */
//en REACT et surout en Js chaque élmnt enfant doit avoir une propriété key (clé unique dans le tab)

export default Characters;
