import { Pressable, StyleSheet} from "react-native";
import React from "react";

export default function newButton({onPress, Img, Text}){
  return (
    <Pressable
    onPress={onPress} 
    
    style={({ pressed }) => [
      {
          transform: pressed
              ? [{ scale: 1.1 }] 
              : [{ scale: 1 }]  
      },
      styles.button
    ]}
    >
    <Image source={Img} style={styles.imageButton} />
    <Text  style={styles.buttonText}>{Text}</Text>
    
</Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    // flex: 1,
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 2,
    padding: 8,
  },
  button: {
           
    width: '30%', 
    height:300,
    marginLeft: 30,
    marginTop: 20,
    justifyContent: "flex-end",
    alignItems:"center",
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#fff', // Optional shadow for iOS
    shadowOffset: { height: 1, width: 1 }, // Optional shadow for iOS
    shadowOpacity: 1, // Optional shadow for iOS
    shadowRadius: 1, // Optional shadow for iOS
    elevation: 2 // Optional elevation for Android
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center'
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black', // optional if you want the bold text to have the same color
  },

  imageButton: {
    width: 180,
    height: 250,
  },
});