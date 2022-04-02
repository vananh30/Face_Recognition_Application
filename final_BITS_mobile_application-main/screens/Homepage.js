import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, Center } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, style, width } from 'styled-system';
import { Linking } from 'react-native';

function Homepage() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.grid_container}>
      <View style = {styles.container}>
        <View style={styles.leftside}>
          <Text style = {styles.header}>Vaccheck</Text>
        </View>
        <View style={styles.rightside}>
        <TouchableOpacity style = {styles.return1} onPress={() => navigation.navigate("Request")} >
        <Image style = {styles.request} source={require('../assets/Homepage/request.png')} /> 
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.return_container}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} >
            <Image style={styles.logout} source={require('../assets/Homepage/logout.png')}></Image>
          </TouchableOpacity>
        </View>
      {/* menu */}
      <View style={[styles.menu, styles.middle]}>
        {/* first row of the menu */}
        <View style={[styles.container, styles.middle, styles.first_row]}>
          {/* left side */}
          <View style={[styles.leftcolumn]}>
            <TouchableOpacity onPress={() => navigation.navigate("Checkdatabase")} >
              <Image style={styles.function_icon} source={require('../assets/Homepage/checkdatabase.png')} />  
              </TouchableOpacity>
            <Text style={styles.text}>Check Database</Text>
          </View>
          {/* right side */}
          <View style = {[styles.rightcolumn]}>
            <TouchableOpacity onPress={() => navigation.navigate("Adduser1")} >
              <Image style={styles.function_icon} source={require('../assets/Homepage/adduser.png')} /> 
            </TouchableOpacity>
            <Text style = {styles.text}>Add user</Text>
          </View>
        </View>
        {/* second roww of the menu */}
        <View style={[styles.container, styles.middle, styles.second_row]}>
          {/* leff side */}
          <View style={[styles.leftcolumn]}>
            <TouchableOpacity onPress={() => navigation.navigate("Request")} >
              <Image style={styles.function_icon} source={require('../assets/Homepage/update.png')} />  
            </TouchableOpacity>
            <Text style = {styles.text}>Request</Text>
          </View>
          {/* right side */}
          <View style={[styles.rightcolumn]}> 
              {/* change the fetch code to IPaddress of the computer */}
              <TouchableOpacity onPress={() => Linking.openURL('http://172.20.10.5:5000/result')} >
              <Image style={styles.function_icon} source={require('../assets/Homepage/Facerecognition.png')} />
            </TouchableOpacity> 
            <Text style = {styles.text}>Face recognition result</Text>
          </View>
        </View>
      </View>
      <View style = {styles.middle , {marginTop: 10}}>
        <Text style={styles.introduction}>Welcome to Vaccheck</Text>
        <Text style = {styles.introduction}>If you have any feedback, please contact us through social media account</Text>
      </View>
      <View style = {styles.social_media_section_container}>
        <View style = {styles.social_media_container}>
          <Image style = {styles.social_media_icon} source={require('../assets/Homepage/Discord.png')} />  
        </View>
        <View style = {styles.social_media_container}>
          <Image style = {styles.social_media_icon} source={require('../assets/Homepage/facebook.png')} />  
        </View>
        <View style = {styles.social_media_container}>
          <Image style = {styles.social_media_icon} source={require('../assets/Homepage/instagram.png')} />  
        </View>
        <View style = {styles.social_media_container}>
          <Image style = {styles.social_media_icon} source={require('../assets/Homepage/twitter.png')} />  
        </View>
      </View>
      {/* button logout */}
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Homepage />
      
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  grid_container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: "row",
  },
  middle: {
    alignItems: 'center',
    justifyContent:'center',
  },
  leftside: {
    alignItems: 'flex-start',
    width: '50%',
  },
  rightside: {
    alignItems: 'flex-end',
    width: '50%',
  },
  return_container: {
    marginTop: 25,
    marginLeft: 25,
  },
  header: {
    marginTop: "10%",
    marginLeft: "10%",
    fontSize: 24,
    fontWeight: 'bold',
  },
  request: {
    marginRight: 30,
  },
  menu: {
    flexDirection: "column",
    backgroundColor: "rgba(28, 119, 195, 0.5)",
    borderRadius: 25,
    marginTop: 54,
    height: "55%",
  },
  introduction: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 30,
    textAlign: "center",
    marginLeft: 9,
    marginRight: 9,
  },
  social_media_section_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 30,
  },
  social_media_container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#CBCBCB",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  social_media_icon: {
    width: 45,
    height: 45,
  },
  first_row: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    height:"45%",
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'flex-end',
  },
  second_row: {
    borderTopColor: "black",
    borderTopWidth: 2,
    height: "45%",
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'flex-start',
  },
  leftcolumn: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth: 2,
    borderRightColor: "black",
    paddingTop: "15%",
    paddingBottom: "15%",
  },
  rightcolumn: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    borderLeftWidth: 2,
    borderLeftColor: "black",
    paddingTop: "15%",
    paddingBottom: "15%",
  },
  function_icon: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 12,
  },
  logout: {
    resizeMode: "contain",
    height: 24,
    width: 24,
  }
});