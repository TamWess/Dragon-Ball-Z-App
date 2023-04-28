import React, { useState, useEffect } from "react";
import Style from "../Style";
import * as Font from "expo-font";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

import LOGO from "../assets/04063092495aab3e0f2c5553fee439c9.jpg";
import LOGOVEGETA from "../assets/vegeta-M.png";
import LOGOCELL from "../assets/bb0dab91aa31dcdcc134facab7223e25.jpg";
import LOGOFREEZER from "../assets/freezer.jpeg";
import LOGOBUU from "../assets/buu.jpg";
import LOGOSAYANGOKU from "../assets/FrNC0VAJ_400x400.jpg";
import LOGOSAYANGOHAN from "../assets/artworks-W4BLrzrz6PDRwYSo-R1rSzQ-t500x500.jpg";

const url = "https://avatarfiles.alphacoders.com/257/thumb-150-257365.jpg";

const CharactersScreen = () => {

	const [loading, setloading] = useState(true);
	const [state, setState] = useState("");
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
	  //Appel à la fonction loadFont
	  loadFont();
	  console.log("platform", Platform.OS);
	}, []);
  
	return (
	  //FlatList et ScrollView ne sont pas compatibles
  <ScrollView>
		<View style={Style.container}>
			<Text style={Style.policeDBZ}>Z</Text>
			<Text style={Style.Lets}>Let's know better your heroes!!!</Text>
			<TextInput
			style={Style.input}
			placeholder="Rechercher..."
			value={state}
			onChangeText={(value) => setState(value)}
			></TextInput>
			<Image style={Style.logo} source={LOGO}></Image>
			<Image style={Style.logo} source={{ uri: url }} />
			<Image style={Style.logo} source={LOGOVEGETA}></Image>
			<Image style={Style.logo} source={LOGOFREEZER} />
			<Image style={Style.logo} source={LOGOCELL}></Image>
			<Image style={Style.logo} source={LOGOBUU} />
			<Image style={Style.logo} source={LOGOSAYANGOKU}></Image>
			<Image style={Style.logo} source={LOGOSAYANGOHAN} />
		</View>
	  </ScrollView>

);
};

// Pour pouvoir créer une une seule partie scrollable
/* <FlatList data={posts} 
renderItem={(item) => <Text style={Style.item}>{item.item.title}</Text>}
keyExtractor={item => item.id.toString()} 
/>

//keyExtractor va nous permettre de récupérér une clé */
//en REACT et surout en Js chaque élmnt enfant doit avoir une propriété key (clé unique dans le tab)


export default CharactersScreen;
