import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Request from './screens/Request';
import RequestDetailPage from './screens/RequestDetailPage';
import Adduser1 from './screens/Adduser1';


import Checkdetailedinformation from './screens/Checkdetailedinformation';
import Homepage from './screens/Homepage';
import Checkdatabase from './screens/Checkdatabase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'native-base';


const Stack = createStackNavigator();

                                                                                                                                   
function App() {
  return (
    // stack screen
    <Stack.Navigator screenOptions={{headerShown: false}} >
  
  <Stack.Screen name="Welcome" component={Welcome} /> 
  <Stack.Screen name="Login" component={Login} />  
  <Stack.Screen name="Checkdetailedinformation" component={Checkdetailedinformation} />  
  <Stack.Screen name="Signup" component={Signup} />  
  <Stack.Screen name="Homepage" component={Homepage} />  
  <Stack.Screen name="Request" component={Request} /> 
  <Stack.Screen name="RequestDetailPage" component={RequestDetailPage} /> 
      <Stack.Screen name="Checkdatabase" component={Checkdatabase} /> 
      <Stack.Screen name="Adduser1" component={Adduser1} /> 

    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}
