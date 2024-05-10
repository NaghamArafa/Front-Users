import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import Item from "./../Componants/item"; // Adjust the path accordingly
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import Country from "./Country";
import Home from "../app/Drawer/Home"

export default function Page() {
    //var
    const router =useRouter();


    //Still working on it 
    const [to ,setTo] =useState(false);
    const hotel = require('./Drawer/(tabs)/Hotels');
    const flight = require('./Drawer/(tabs)/Flights');

    return(
        <View style={styles.container}>
            
            <Link href='/Login' asChild>
                <Text>Login</Text>
            </Link>
            <Link href='/SignUp' asChild>
                <Text>SignUp</Text>
            </Link>
           
           
            <Link href='/Country' asChild>
                <Text>Countries</Text>
            </Link>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        borderRadius: 5,
        width: 'auto',
        height: 'auto',
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    list: {
        width: '100%',

    },
    items:{
        flex :1,
        flexDirection:'row'
    }
});
