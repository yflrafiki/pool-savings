import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const signup = ({ navigation }) => { 
    const [isAccepted, setIsAccepted] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (username && email && phone && password && isAccepted) {
            navigation.navigate('MobileMoneyLink', {name: username});
        } else{
            Alert.alert('Error', 'Please fill out all fields and accept the terms and conditions');
        }
    };

  return (
            <View style={styles.stepContainer}>
                <Image source={require('../assets/images/logo1.png')} style={styles.logo} />

             <TextInput 
                style={styles.input}
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
             />
             <TextInput 
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
             />
             <TextInput 
                style={styles.input}
                placeholder='Phone'
                value={phone}
                onChangeText={setPhone}
             />
             <TextInput 
                style={styles.input}
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
             />
             <View style={styles.termsContainer}>
                <Switch 
                    value= {isAccepted}
                    onValueChange={setIsAccepted}
                    thumbColor={isAccepted ? "#4285F4" : "#f4f3f4"}
                    trackColor={{false: "#767577", true: "#81b0ff"}}
                />
                <Text style={styles.checkboxLabel}>Accept all terms and conditions</Text>
             </View>
             <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
             </TouchableOpacity>
            </View>
  );
};

const styles = StyleSheet.create({
    stepContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 14,
        color: '#555', // text color
    },
    button: {
        backgroundColor: '#4285F4',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default signup