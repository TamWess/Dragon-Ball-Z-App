import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Styles from "./Style.js";

import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "./config.json";
const Icon = createIconSetFromFontello(fontelloConfig);

//All the screens import

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

// const Stack = createNativeStackNavigator();
// console.log("Stack", Stack);

const Stack = createNativeStackNavigator();

const { Navigator, Screen } = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = ({ navigation }) => {
  const [loading, setloading] = useState(true);

  const [state, setState] = useState("");

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        fontello: require("./assets/fonts/fontello.ttf"),
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

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "rgba(34,36,40,1)",
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "icon-z"
                : "icon-z-focus";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "white",
          tabBarActiveBackgroundColor: "orange",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("./assets/icns/icon_ball-.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                ></Image>
                <Text style={{ color: focused ? "#e32f45" : "#748c94" }}></Text>
              </View>;
            },
          }}
        />
        <Tab.Screen name="Characters" component={CharactersScreen} />
        <Tab.Screen name="Arcs" component={ArcsScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>

      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="Arcs" component={ArcsScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        {/* <Stack.Screen name="SonGoku" component={SonGokuScreen} /> */}
      {/* </Tab.Navigator>  */}
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
