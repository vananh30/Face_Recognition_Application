import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, height, paddingLeft, style, width } from 'styled-system';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

function Request() {
    const navigation = useNavigation();
  return (
      
    <View style={styles.container}>
    {/* Icon letter */}
      <View style={styles.containerFrame}>
          <Image style = {styles.frame} source={require('../assets/Request/iconsletter.png')}  alt="Icon letter"/> 
      </View>
   {/* Information */}
   <View style={styles.containerInfo}>
        <View style = {styles.text1}>
            <Text style = {styles.Name}> NGUYEN THE MINH</Text>     
        </View>  
      {/* Detail data */}
      <View style = {styles.requesSector}>
          <View style = {styles.text}>
             <Text style = {styles.leftText}>Student's ID</Text>
             <Text style = {styles.leftText}>Campus</Text>
             <Text style = {styles.leftText}>Vaccine status</Text>
             <Text style = {styles.leftText}>Recover status</Text>     
             <Text style = {styles.leftText}>Data of Birth</Text>  
             <Text style = {styles.leftText}>Gender</Text>  
             <Text style = {styles.leftText}>Description</Text>     
          </View>
          <View style = {styles.text}>
             <Text style = {styles.rightText}>3836320</Text>
             <Text style = {styles.rightText}>Sai Gon campus</Text>
             <Text style = {styles.rightText}>2 doses: Prizer, Prizer</Text>
             <Text style = {styles.rightText}> Not affected</Text>
             <Text style = {styles.rightText}>19/06/2002</Text>
             <Text style = {styles.rightText}>Male</Text>
             <Text style = {styles.rightText}>Short hair, have glasses</Text>
          </View>
      </View>
   </View>
        {/* Person image */}
        <View style={styles.containerFrame2}>
              <Image source={require('../assets/Request/person.png')} alt="Person Image" /> 
        </View>
      
      <TouchableOpacity style = {styles.return1} onPress={() => navigation.navigate("Request")} >
      <Image  source={require('../assets/Request/return.png')} alt="Return arrow"/> 
      </TouchableOpacity>
      <View style = {styles.text1}>
      <Button style={styles.buttonDesign} onPress={() => navigation.navigate("#")} >
              ACCEPT
      </Button>
      <Text style = {styles.text3}>REJECT</Text>
      </View>
      
     


   

      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Request />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C77C350',
  },
  containerFrame:{
    alignItems: 'center',
    marginTop: '20%',
  },
  containerFrame2:{
    marginTop: '5%',
    alignItems: 'center',
  },
  containerInfo:{
    backgroundColor: 'white',
    marginTop: '60%',
    position: 'absolute',
    height: 400,
    width:DeviceWidth, 
  },
  requesSector:{
    marginTop: 10,
    flexDirection:'row', 
    marginLeft: 10,
    marginRight: 10,
    borderWidth:1,
    borderColor: 'black',
    paddingBottom: 20
  },
  leftText:{
      marginLeft: 20,
      paddingTop: 20,
  },
  rightText:{
    marginRight: 20,
    paddingTop: 20,
    paddingLeft: 40
  },
  return1:{
    position: 'absolute',
    top: 30, 
  },
  text1:{
    alignItems:'center',
    width: '100%',
  },
  Name:{
    marginTop: '10%',
    fontWeight: 'bold',
  },
  buttonDesign:{
    top: 430,
    backgroundColor:'#026efd', 
    borderRadius: 40,
    width: 100,
},
  text3:{ 
    top: 450,
    color: 'red',
    fontWeight: 'bold',
}
  },
);
