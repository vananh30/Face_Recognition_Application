import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, Center } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, style, width } from 'styled-system';
import { withTheme } from 'styled-components';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function Checkdatabase() {
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
          <TouchableOpacity onPress={() => navigation.navigate("Homepage")} >
            <Image source={require('../assets/Checkdatabase/BackArrow.png')}></Image>
          </TouchableOpacity>
        </View>
        {/* category */}
        <View>
          <Text style = {styles.type}>Student</Text>
        </View>
        {/* search */}
        <View style = {styles.search_container}>
          <View style={[styles.search, styles.container]}>
            <Image style = {styles.search_icon} source ={require('../assets/Checkdatabase/Search.png')}></Image>
            <Text style = {styles.search_letter}>Search</Text>
          </View>
        </View>
        {/* category selection */}
        <View style = {styles.category}>
          <View style = {[styles.category_box, {backgroundColor: '#46FA63'}]}>
            <Text>Pass</Text>
          </View>
          <View style = {[styles.category_box, {backgroundColor: '#FF5A5A'}]}>
            <Text>Fail</Text>
          </View>
          <View style = {[styles.category_box, {backgroundColor: '#46D9FA'}]}>
            <Text>All</Text>
          </View>
        </View>
        {/* list */}
        <View style = {styles.list}>
          <View style = {styles.list_header_section}>
            <Text style = {styles.list_header}>
              A
            </Text>
          </View>
          <View style={styles.list_content}>
          <TouchableOpacity onPress={() => navigation.navigate("Checkdetailedinformation")} >
            <Text style = {styles.student_identity}>
              Huynh Van Anh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Checkdetailedinformation")} >

            <Text style = {styles.student_identity}>
              Nguyen Viet Anh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Checkdetailedinformation")} >

            <Text style = {styles.student_identity}>
              Nguyen Duc Anh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Checkdetailedinformation")} >

            <Text style = {styles.student_identity}>
              Phan Duc Anh
              </Text>
              </TouchableOpacity>
          </View>
          <View style = {styles.list_header_section}>
            <Text style = {styles.list_header}>
              B
            </Text>
          </View>
          <View style = {styles.list_content}>
            <Text style = {styles.student_identity}>
              Nguyen Duc Bao
            </Text>
            <Text style = {styles.student_identity}>
              Pham Duc Binh
            </Text>
            <Text style = {styles.student_identity}>
              Pham Minh Binh
            </Text>
          </View>
          <View style = {styles.list_header_section}>
            <Text style = {styles.list_header}>
              C
            </Text>
          </View>
          <View style = {styles.list_content}>
            <Text style = {styles.student_identity}>
              Nguyen Chi Cong
            </Text>
            <Text style = {styles.student_identity}>
              Pham Duc Cong
            </Text>
          </View>
        </View>
      </View>
      {/* search by section */}
      <View style = {styles.search_by_container}>
        <Text style = {styles.search_text}>
          Search by: 
        </Text>
        <View style = {styles.search_by_category_container}>
          <View style = {styles.search_by_category}>
            <Text> Student's name</Text>
          </View>
          <View style = {styles.search_by_category}>
            <Text> Student's id</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Checkdatabase />
      
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
  type: {
    marginTop: 20,
    width: "100%",
    textAlign: 'center',
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
});
