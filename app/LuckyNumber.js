import {ImageBackground, Pressable, StyleSheet, Text, View ,Alert,Share,SafeAreaView} from 'react-native'
import React from 'react'
import * as Clipboard from 'expo-clipboard';
import {useLocalSearchParams } from 'expo-router'

const LuckyNumber = () => {
    const [number,setNumber] = React.useState(null);
    const {name} = useLocalSearchParams();


    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        return randomNumber;
    }

    React.useEffect(() => {
        setNumber(generateRandomNumber());
    },[])

    const copyNumbertoClipboard = async() => {
        await Clipboard.setStringAsync(String(number)); 
        alert(String(number)+" Copied to clipboard 🥳");
    }

    const shareNumber = async() => {
        try {
            const result = await Share.share({
              message:
                'Hii !! I am '+name+' and my lucky numbe is '+number,
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
    }
  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.container}>
        <SafeAreaView>
        <Text style={styles.firstHeading}>Hello {name} ✌️</Text>
        <Text style={styles.secondHeading}>Your lucky number is :</Text>
        <Text style={styles.number}>{number}</Text>
        <Pressable style={styles.button} onPress={copyNumbertoClipboard}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>
        </Pressable>
        <Pressable style={styles.ShareButton} onPress={shareNumber}>
            <Text style={styles.buttonText}>Share Number</Text>
        </Pressable>
        </SafeAreaView>
    </ImageBackground>
  )
}

export default LuckyNumber

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
        alignSelf:'center'
      },
      secondHeading:{
        color:"#283F3B",
        fontSize:24,
        fontWeight:"bold",
        marginTop:50 
      },
      number:{
        color:"black",
        fontSize:24,
        fontWeight:"bold",
        marginTop:50 ,
        backgroundColor:"pink",
        padding:20,
        borderRadius:50,
        width:100,
        alignSelf:'center',
        textAlign:'center'
      },
      button:{
        backgroundColor:"purple",
        margin:20,
        padding:10,
        borderRadius:20,
      },
      buttonText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:'center'
      },
      ShareButton:{
        backgroundColor:"violet",
        margin:20,
        padding:10,
        borderRadius:20,
        textAlign:'center'
      }
})