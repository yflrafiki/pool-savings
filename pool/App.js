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
import SetGoal from './screens/SetGoal';
import FlatSavingPackage from './screens/FlatSavingPackage';
import PesewaSavePackage from './screens/PesewaSavePackage';
import PesewaSaveInReversePackage from './screens/PesewaSaveInReversePackage';
import OscillatingPesewaSavePackage from './screens/OscillatingPesewaSavePackage';
import LockSavings from './screens/LockSavings';
import Success from './screens/Success';
import History from './screens/History';
import Deductions from './screens/Deductions';
import Deposits from './screens/Deposits';
import Withdrawals from './screens/Withdrawals';
import YourGoals from './screens/YourGoals';
import GoalDetail from './screens/GoalDetail';
import Success2 from './screens/Success2';


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
        <Stack.Screen 
          name="SetGoal"
          component={SetGoal}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="FlatSavingPackage"
          component={FlatSavingPackage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="PesewaSavePackage"
          component={PesewaSavePackage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="PesewaSaveInReversePackage"
          component={PesewaSaveInReversePackage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="OscillatingPesewaSavePackage"
          component={OscillatingPesewaSavePackage}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='LockSavings'
          component={LockSavings}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Success'
          component={Success}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='History'
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Deductions'
          component={Deductions}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Deposits'
          component={Deposits}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Withdrawals'
          component={Withdrawals}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='YourGoals'
          component={YourGoals}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='GoalDetail'
          component={GoalDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Success2'
          component={Success2}
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
