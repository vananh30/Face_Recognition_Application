import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, SafeAreaView, Picker, TextInput, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { alignItems } from 'styled-system';
import { Input, NativeBaseProvider, Button, Icon, Box, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';


function Adduser1() {
  // setup the variable
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [Images, setImage] = useState([]);
  const [base64s, setbase64] = useState("");
  const [name, setname] = useState("");
  const [id, setId] = useState("");
  const [vaccination, setvaccination] = useState("");
  const [firstDose, setfirstdose] = useState("");
  const [secondDose, setseconddose] = useState("");
  const [F0, setF0] = useState("");
  const [expired_ID, setexpiredIDdate] = useState("");
  const [campus, setcampus] = useState("");
  const [daily_health_declaration, setdailyhealthdeclaration] = useState("");
  const [health_declaration_status, sethealthdeclaration] = useState("");
  const [showcamera, setShowCamera] = useState(false);
  const navigation = useNavigation();
  const cameraRef = useRef(null);
  //take picture function
  const takephoto = async () => {
    if (cameraRef) {
      console.log("in take picture");
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
          base64: true
        });
        return photo;
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  //check if we got permission to access the camera or not
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {/* if access camera is allowed => camera page */}
      {showcamera ? (<Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          {/* flip button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          {/* take photo button */}
          <TouchableOpacity style={styles.button} onPress={async () => {
            const r = await takephoto();
            setbase64(r.base64)
            setShowCamera(false)
          }}>
            <Text style={styles.text}> Take photo </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      ) : (
          // if not camera page
            <ScrollView styles={{alignItems: "center", paddingTop: 50,marginTop: 50}} scrollEnabled={false}>
            <View>
              <Text style = {{textAlign: 'center', marginTop: 50, fontSize: 20, fontWeight: 'bold'}}>Add user</Text>
              
              <Text style = {{textAlign: 'center', marginTop: 20 }}> Please fill in the form</Text>
              <View style={styles.return_container}>
                {/* return */}
          <TouchableOpacity onPress={() => navigation.navigate("Homepage")} >
            <Image style={styles.back} source={require('../assets/Checkdatabase/BackArrow.png')}></Image>
                </TouchableOpacity>
                
              </View>
              {/* input field */}
              <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                  <Input
                      variant="outline"
                      placeholder="name"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                    onChangeText={value => { setname(value) }}
                    
          />
        </View>
              </View>
              <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                  <Input

                      variant="outline"
                      placeholder="Id"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setId(value) }}
          />
        </View>
            </View>

              <View>
              <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                    <Input

                      variant="outline"
                      placeholder="Vaccine status(True or False)"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setvaccination(value) }}
          />
        </View>
      </View>
                      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                    <Input

            variant="outline"
            placeholder="First Dose"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setfirstdose(value) }}
          />
                  </View>
                  
      </View>
                </View>
            </View>
            <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                <Input
                      variant="outline"
                      placeholder="Second Dose"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setseconddose(value) }}
          />
        </View>
            </View>
            <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                <Input

                      variant="outline"
                      placeholder="F0(Yes or No)"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setF0(value) }}
          />
        </View>
            </View>
            
            <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                <Input

                      variant="outline"
                      placeholder="ID's expiration date"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setexpiredIDdate(value) }}
          />
        </View>
            </View>
            <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                <Input

                      variant="outline"
                      placeholder="Campus"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setcampus(value) }}
          />
        </View>
            </View>
            <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                <Input

                      variant="outline"
                      placeholder="daily health declaration"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { setdailyhealthdeclaration(value) }}
          />
        </View>
            </View>
            <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
                <Input

                      variant="outline"
                      placeholder="Health declaration status"
                      _light={{
                        placeholderTextColor: "blueGray.400",
                      }}
                      _dark={{
                        placeholderTextColor: "blueGray.50",
                      }}
                      onChangeText={value => { sethealthdeclaration(value) }}
          />
        </View>
            </View>
            
            
            <View style={styles.buttonLoginStyle}>
      <Button style={styles.buttonDesign} onPress={() => setShowCamera(true)} >
            Take picture
        </Button>
            </View>
            <View style={styles.buttonLoginStyle}>
              {/* change the fetch code to IPaddress of the computer */}
      <Button style={styles.buttonDesign} onPress={() => {
                const Images = { base64s, name, id, vaccination, firstDose, secondDose, F0, expired_ID, campus, daily_health_declaration, health_declaration_status };
                const response = fetch("http://172.20.10.5:5000/add_image", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(Images)
                });
                navigation.navigate("Homepage")
              }} >
            Submit
        </Button>
            </View>
            <View style = {styles.middle}>
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
              </ScrollView>
      )}
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
     
        <Adduser1/>
      
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.3 ,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  emailInput:{
    borderWidth: 1,
  },
  buttonDesign:{
    backgroundColor:'#026efd', 
    borderRadius: 40,
  },
  buttonLoginStyle:{
    marginTop: 20,
    marginLeft:40,
    marginRight:40
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
    marginTop: 10,
    backgroundColor: "#CBCBCB",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  social_media_icon: {
    width: 45,
    height: 45,
  },
  middle: {
    alignItems: 'center',
    justifyContent:'center',
  },
  introduction: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    marginLeft: 9,
    marginRight: 9,
  },
  return_container: {
    marginTop: 15,
    marginLeft: 25,
  },
});
