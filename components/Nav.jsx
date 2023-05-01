import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Style from "../Style";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	ScrollView,
	FlatList,
  } from "react-native";

  const Nav = () => {
	return(
		<Tab.Navigator
				name="Home"
				component={HomeScreen}
				options={{
						tabBarIcon: ({ focused }) => {
						<View style={{alignItems: "center", justifyContent: "center", top: 10}}>
							<Image 
							source={require("../assets/icns/icon_ball-.png")}
							resizeMode="contain"
							style={{
								width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94'
							}}
							></Image>
							<Text style={{color: focused ? '#e32f45' : '#748c94'}}></Text>
						</View>
						}
					}}
			>
		<Tab.Screen name="Characters" component={CharactersScreen} />
		<Tab.Screen name="Arcs" component={ArcsScreen} />
		<Tab.Screen name="News" component={NewsScreen} />
	</Tab.Navigator>
	)
  }