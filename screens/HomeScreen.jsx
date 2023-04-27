import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Style from "../Style";

import CharactersScreen from "./CharactersScreen";
import ProfileScreen from "./ProfileScreen";

import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	ScrollView,
	FlatList,
	Button,
	TouchableOpacity,
  } from "react-native";

//   const { Navigator, Screen } = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();

  const HomeScreen = ({navigation})=>{

		return(
			<View >
					<Button 
					title="Characters"
					onPress={() => navigation.navigate("Characters")}
					color="#841584"
					/>
					<Button style={Style.Bouton}
					title="Profile"
					onPress={() => navigation.navigate("Profile")}
					/>
			</View>
		)
  }

  export default HomeScreen