import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, paddingLeft, style, width } from 'styled-system';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

function Request() {
    const navigation = useNavigation();
  return (
      
    <View style={styles.container}>
      <Image style = {styles.frame} source={require('../assets/Request/Frame9.png')} /> 
      
      <TouchableOpacity style = {styles.return1} onPress={() => navigation.navigate("Homepage")} >
      <Image  source={require('../assets/Request/return.png')} /> 
      </TouchableOpacity>

      <View style = {styles.requesSector}>
        <Image style = {styles.letter} source={require('../assets/Request/iconsletter.png')} />
        <View style = {styles.text1}>
             <Text style = {styles.textID}>Request id: VC9007488</Text>
        </View> 
        <Button style={styles.buttonDesign} onPress={() => navigation.navigate("RequestDetailPage")} >
              VIEW DETAIL
        </Button>
      </View>

      <View style={styles.containerLine}>
      <Image source={require('../assets/Request/line.png')} /> 
      </View>

      <View style = {styles.requesSector}>
        <Image style = {styles.letter} source={require('../assets/Request/iconsletter.png')} />
        <View style = {styles.text1}>
             <Text style = {styles.textID}>Request id: VC9007488</Text>
        </View> 
        <Button style={styles.buttonDesign} onPress={() => navigation.navigate("RequestDetailPage")} >
              VIEW DETAIL
        </Button>
      </View>

      <View style={styles.containerLine}>
      <Image source={require('../assets/Request/line.png')} /> 
      </View>

      <View style = {styles.requesSector}>
        <Image style = {styles.letter} source={require('../assets/Request/iconsletter.png')} />
        <View style = {styles.text1}>
             <Text style = {styles.textID}>Request id: VC9007488</Text>
        </View> 
        <Button style={styles.buttonDesign} onPress={() => navigation.navigate("RequestDetailPage")} >
              VIEW DETAIL
        </Button>
      </View>

      <View style={styles.containerLine}>
      <Image source={require('../assets/Request/line.png')} /> 
      </View>

      <View style = {styles.requesSector}>
        <Image style = {styles.letter} source={require('../assets/Request/iconsletter.png')} />
        <View style = {styles.text1}>
             <Text style = {styles.textID}>Request id: VC9007488</Text>
        </View> 
        <Button style={styles.buttonDesign} onPress={() => navigation.navigate("RequestDetailPage")} >
              VIEW DETAIL
        </Button>
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
    backgroundColor: '#fff',
  },
  frame:{
    position: 'relative',
    width: "100%"
  },
  return1:{
    position: 'absolute',
    top: 30, 
  },
  letter:{
    marginLeft: 20,
  },
  text1:{
    flexDirection:'row',
    justifyContent:'center',
    width: 150,
    paddingTop:5,
},
textID:{
    fontWeight: "bold"
},
requesSector:{
  flexDirection:'row', 
  width:DeviceWidth, 
  height:120, 
  alignItems:'center'
    
},
buttonDesign:{
  backgroundColor:'#026efd', 
  borderRadius: 40,
},
containerLine:{
  justifyContent: 'center',
  alignItems: 'center',
}
  },
);
