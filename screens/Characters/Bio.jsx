import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import LOGOSAYANGOHAN from "../../assets/img/descriptions/gohan-description.jpg";
import Styles from "../../Style.js";


const click = () => {
	console.log("click");
}
// const [characters, setCharacters] = useState([]);

const Bio = ({route, navigation}) => {
	const {name} = route.params
	console.log("BONJOUR");

	return(
		// <ScrollView>
			<View>
				<Text>Page biographie</Text>
				<Text>{name}</Text>
				{/* {characters.map((item) => (
							<React.Fragment key={item._id}>
								{}
								<View >
									
									
										<Image style={Styles.logo} source={item.description}/>
									
									
									
								</View>
							</React.Fragment>
						))} */}
			</View>
		
	)
}

export default Bio;

const style = StyleSheet.create({
	boutton: {
		width: 20,
		backgroundColor: "blue",
	}
})