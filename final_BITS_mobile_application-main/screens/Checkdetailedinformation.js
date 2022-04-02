import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, Center } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, style, width } from 'styled-system';
import { withTheme } from 'styled-components';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function Checkdetailedinformation() {
    const navigation = useNavigation();
  return (
    // body
    <SafeAreaView style={styles.grid_container}>
      <View style = {styles.body}>
        <View style={styles.container}>
          {/* header */}
          <View style={styles.leftside}>
            <Text style = {styles.header}>Vaccheck</Text>
          </View>
          {/* request */}
          <View style={styles.rightside}>
            <Image style = {styles.request} source={require('../assets/Homepage/request.png')} />  
          </View>
        </View>
        <View style={styles.return_container}>
          <TouchableOpacity onPress={() => navigation.navigate("Checkdatabase")} >
            <Image style={styles.back} source={require('../assets/Checkdatabase/BackArrow.png')}></Image>
          </TouchableOpacity>
        </View>
        {/* avatar */}
        <View style = {styles.avatar}>
          <Image style = {styles.ava_frame} source ={require('../assets/Checkdetailinformation/avatar.png')}></Image>
        </View>
        {/* name */}
        <View style = {styles.name}>
          <Text style = {styles.text}>Nguyen The Minh</Text>
        </View>
        {/* detailed information */}
        <View style = {styles.detail_info_container}>
          <View style = {styles.detail_info_section}>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Student's ID</Text>
            </View>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>3878434</Text>
            </View>
          </View>
          <View style = {styles.detail_info_section}>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Campus</Text>
            </View>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Sai Gon Campus</Text>
            </View>
          </View>
          <View style = {styles.detail_info_section}>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Vaccine status</Text>
            </View>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>2 doses </Text>
              <Text style = {styles.text}>(Pfizer)</Text>
              <Text style = {styles.text}>(Pfizer)</Text>
            </View>
          </View>
          <View style = {styles.detail_info_section}>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Recover status</Text>
            </View>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Not affected</Text>
            </View>
          </View>
          <View style = {styles.detail_info_section}>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Date of birth</Text>
            </View>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>19/06/2002</Text>
            </View>
          </View>
          <View style = {styles.detail_info_section}>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Gender</Text>
            </View>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Male</Text>
            </View>
          </View>
          <View style = {styles.detail_info_section}>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Description</Text>
            </View>
            <View style = {styles.detail_info_box}>
              <Text style = {styles.text}>Short hair, have glasses</Text>
            </View>
          </View>
          <View style={[styles.detail_info_section , styles.middle]}>
            <Image style = {styles.ava_frame} source ={require('../assets/Checkdetailinformation/check.png')}></Image>
          </View>
        </View>
        {/* search */}
        {/* category selection */}
      </View>
      {/* search by section */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Checkdetailedinformation />
      
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  grid_container: {
    flex: 10,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: "row",
  },
  body: {
    flex: 9,
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftside: {
    alignItems: 'flex-start',
    width: '50%',
  },
  rightside: {
    alignItems: 'flex-end',
    width: '50%',
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
  return_container: {
    marginTop: 25,
    marginLeft: 25,
  },
  back: {
    width: 25,
    height: 25,
  },

  search_container: {
    backgroundColor: "#DEDEDE",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  search: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: "100%",
    padding: 10,
  },
  search_letter: {
    fontSize: 12,
    opacity: 50,
  },
  search_icon: {
    width: 12,
    height: 12,
    opacity: 50,
  },
  category: {
    width: "100%",
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  category_box: {
    borderRadius: 5,
    width: 95,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flexDirection: "column",
    flex: 0.8,
  },
  list_header_section: {
    backgroundColor: "#DFDFDF",
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  list_header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list_content: {
    flexDirection: "column",
    padding: 10,
  },
  student_identity: {
    padding: 9,
    fontSize: 18,
  },
  search_by_container: {
    backgroundColor: "#717171",
    flexDirection: 'column',
    height: "100%",
    flex: 1,
  },
  search_text: {
    padding: 15,
    color: "white",
  },
  search_by_category_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  search_by_category: {
    borderRadius: 5,
    width: 150,
    height: '100%',
    backgroundColor: "white",
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    marginTop: 20,
    width: "100%",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  ava_frame: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
  detail_info_container: {
    margin: 20,
    borderWidth: 2,
    flexDirection: "column",
    padding: 10,
  },
  detail_info_section: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  detail_info_box: {
    width: "50%",
    textAlign: 'center',
    justifyContent: 'center',
     alignItems: 'center',
  },
});
