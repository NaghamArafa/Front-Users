import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import Item from "../Componants/item"; // Adjust the path accordingly
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import Home from "./Drawer/Home"

export default function Page() {
    //var
    const router =useRouter();


    //Still working on it 
    const [to ,setTo] =useState(false);
    const hotel = require('./Drawer/(tabs)/Hotels');
    const flight = require('./Drawer/(tabs)/Flights');

    return(
        <View style={styles.container}>
             <Pressable onPress={()=>router.replace("./Drawer/Home")}>
        <Text style={{ marginTop: 10 }}>HOME</Text>
        </Pressable>
            
            <Link href='/Login' asChild>
                <Text>Login</Text>
            </Link>
            <Link href='/SignUp' asChild>
                <Text>SignUp</Text>
            </Link>
           
           
            <Pressable onPress={()=>router.replace("./Drawer/Country")}>
        <Text style={{ marginTop: 10 }}>Countries</Text>
        </Pressable>

            
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
