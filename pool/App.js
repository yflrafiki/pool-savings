import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Welcome  from './screens/Welcome';
import Signup from './screens/signup';
import  Login  from './screens/Login';
import MobileMoneyLink from './screens/MobileMoneyLink';
import MobileMoneyApproval from './screens/MobileMoneyApproval';
import Welcome2 from './screens/Welcome2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator InitialRouteName= 'Welcome'>
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name= "MobileMoneyLink"
          component={MobileMoneyLink}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="MobileMoneyApproval"
          component={MobileMoneyApproval}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Welcome2"
          component={Welcome2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
