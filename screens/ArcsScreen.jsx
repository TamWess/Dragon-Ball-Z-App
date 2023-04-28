import React, { useState, useEffect } from "react";
import Style from "../Style";
import * as Font from "expo-font";


import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = (props) => {
    return (
        <View style ={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey"
    }
})

export default ProfileScreen
