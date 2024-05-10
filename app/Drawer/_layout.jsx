import React from "react";
import {Drawer} from 'expo-router/drawer'
import { DrawerContentScrollView , DrawerItem} from '@react-navigation/drawer'
import {Feather} from '@expo/vector-icons';
import { router } from "expo-router";

const CutomDrawerContent = (props) => {
    return(
    <DrawerContentScrollView {...props}>
       <DrawerItem  
       icon={({color , size}) => (
       <Feather name="list" size={24} color={'red'} />
       )}
       label={"HOME"}
       onPress={() => {
        router.push('/(drawer)/Home');
       }}
       />
        {/* <DrawerItem  
       icon={({color , size}) => (
       <Feather name="list" size={24} color={'blue'} />
       )}
       label={"Log Out"}
       onPress={async () => {
        await logout();
        router.navigate("/app/Drawer/(tabs)/login");
       }}
       /> */}

    
    </DrawerContentScrollView>
    );
};

export default function Layout(){

    return(
        <Drawer drawerContent={(props) => <CutomDrawerContent {...props} />} />
    )
}