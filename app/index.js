import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import React from 'react';
import { Link,router } from 'expo-router';


export default function Home() {
  const [name, setName] = React.useState('');


  const go=()=>{
    router.push({pathname:"/LuckyNumber",params:{name}});   
  }                 
  return (
    <ImageBackground source={require('../assets/bg1.png')} style={styles.container}>
    <View >

      <Text style={styles.firstHeading}>WELCOME TO LUCKY NUMBER</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter your name"
        inputMode="text"
        placeholderTextColor={'black'}
        
      />
      <Pressable onPress={go} >
        <Text style={styles.button}>Wish me a Luck !</Text>
      </Pressable>  
    </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
  },
  firstHeading:{
    color:"black",
    fontSize:24,
    fontWeight:"bold",
    marginTop:50 ,
    // marginLeft:20
  },
  input:{
    height: 40,
    margin: 52,
    borderWidth: 1,
    padding: 10,
    paddingLeft:20,
    alignSelf:"center",
    width:200,
    fontWeight:"bold",
    backgroundColor:"white",
    borderRadius:20,
    },
    button:{
      backgroundColor:"black",
      color:"white",
      padding: 10,
      width:"38%",
      alignSelf:"center",
      borderRadius:20,
      marginTop:40
    }
    
});
