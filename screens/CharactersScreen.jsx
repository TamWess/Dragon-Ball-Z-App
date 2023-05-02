import React, { useState, useEffect } from "react";
import Styles from "../Style.js";
import * as Font from "expo-font";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from "axios";
// import "./san-cho-burgers.scss";

import { URLCharactersAvatars } from "../utils/urls/urlCharacters.js";

import SonGokuScreen from './Characters/SonGokuScreen.jsx'

import {
  View,
  Text,
  StylesSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";

import LOGO from "../assets/04063092495aab3e0f2c5553fee439c9.jpg";
import LOGOVEGETA from "../assets/vegeta-M.png";
import LOGOCELL from "../assets/bb0dab91aa31dcdcc134facab7223e25.jpg";
import LOGOFREEZER from "../assets/freezer.jpeg";
import LOGOBUU from "../assets/buu.jpg";
import LOGOSAYANGOKU from "../assets/FrNC0VAJ_400x400.jpg";
import LOGOSAYANGOHAN from "../assets/artworks-W4BLrzrz6PDRwYSo-R1rSzQ-t500x500.jpg";

const CharactersScreen = () => {

	const [loading, setloading] = useState(true);
	const [state, setState] = useState("");
	const [charactersAvatars, setCharactersAvatars] = useState([]);
	
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

		const fetchCharactersAvatarsFunction = async () => {
			try {
			const { data } = await axios.get(URLCharactersAvatars.fetchCharactersAvatars);
			setBurgers(data);
			} catch (error) {
			console.log(error.message());
			}
			console.log(charactersAvatars);
		};

	  //Appel à la fonction loadFont
	  loadFont();
	  console.log("platform", Platform.OS);
	}, []);
  
	return (

	  //FlatList et ScrollView ne sont pas compatibles

  <ScrollView >
			<ImageBackground source={require('../assets/img/characters-background.jpg')} style={Styles.containerCharactersPage}>
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
					{charactersAvatars.map((item) => (
						<React.Fragment key={item._id}>
							<View >
								
								<Image style={Styles.logo} source={item.img}></Image>
								
							</View>
						</React.Fragment>
					))}

{/* -------------------------------------------------------------------------------------------------- */}

	
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

// Pour pouvoir créer une une seule partie scrollable
/* <FlatList data={posts} 
renderItem={(item) => <Text style={Styles.item}>{item.item.title}</Text>}
keyExtractor={item => item.id.toString()} 
/>

//keyExtractor va nous permettre de récupérér une clé */
//en REACT et surout en Js chaque élmnt enfant doit avoir une propriété key (clé unique dans le tab)


export default CharactersScreen;
