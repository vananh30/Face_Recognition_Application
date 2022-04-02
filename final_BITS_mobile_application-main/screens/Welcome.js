import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, Center } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, paddingLeft, style, width } from 'styled-system';


function Welcome() {
    const navigation = useNavigation();
  return (
      
    <View style={styles.container}>
      <Image style = {styles.oval} source={require('../assets/Welcome/Oval.png')} alt="Picture of the author"/> 
      <Image style = {styles.oval2} source={require('../assets/Welcome/Oval-2.png')}  alt="Picture of the author"/>
      <Image style = {styles.logo} source={require('../assets/Welcome/logo.png')} alt="Picture of the author"/>  
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Welcome to Vaccheck!</Text>
      </View>

      <View style={styles.text2}>
        <Text style={styles.UnderLoginText} >With long experience in the ML industry, we create the best quality products </Text>
      </View>
          {/* Button */}
          <View style={styles.buttonLoginStyle}>
      <Button style={styles.buttonDesign} onPress={() => navigation.navigate("Login")} >
              Get Started
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Welcome />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold'
  },
  UnderLoginText:{
    marginTop: 8,
    color: 'gray',
    alignItems: "center"
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'column',
    justifyContent:'center',
    paddingTop:5,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    },
  oval:{
    position:'relative',
    left: '40%',
    width: '70%',
},
oval2:{
    position:'absolute',
    top:250
 },
 logo:{
    position:'absolute',
    top:250,
    left:75
 },
 buttonLoginStyle:{
  marginTop: 100,
  marginLeft:40,
  marginRight:40
},
buttonDesign:{
  backgroundColor:'#026efd', 
  borderRadius: 40,
}
  },
);
