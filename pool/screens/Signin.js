import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Signin = ({ navigation }) => { 
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
                <Image source={require('../assets/images/chok11.png')} style={styles.logo} />
                <View style={styles.fieldset}>
                    <View style={styles.fieldsetItem}>
                    <Text style={styles.legend}>Username</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Username'
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={styles.fieldsetItem}>
                    <Text style={styles.legend}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.fieldsetItem}>
                    <Text style={styles.legend}>Phone</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Phone'
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View style={styles.fieldsetItem}>
                    <Text style={styles.legend}>Password</Text>
                        <TextInput 
                            style={styles.input1}
                            placeholder='Password'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                </View>
             <View style={styles.termsContainer}>
                <Switch 
                    value= {isAccepted}
                    onValueChange={setIsAccepted}
                    thumbColor={isAccepted ? "#4285F4" : "#f4f3f4"}
                    trackColor={{false: "#D9D9D9", true: "#81b0ff"}}
                    width={23}
                    height={10}
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
        width: 313,
        height: 266,
        top: 19,
        marginBottom: 20,
    },
    fieldset: {
        width: 330,
        height: 478,
        top: 68,
      },
      fieldsetItem: {
        marginBottom: 10,
        position: 'relative',
      },
      legend: {
        position: 'absolute',
        top: -8,
        left: 15,
        fontSize: 12,
        zIndex: 1,
        width: 60,
        height: 40,
        fontWeight: 500,
        color: '#8D8A8A'
      },
    input: {
        width: 330,
        height: 50,
        borderColor: '#CCC9C9',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    input1: {
        width: 330,
        height: 50,
        borderColor: '#3852E7',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -130,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 16,
        color: '#968B8B',  // text color
        width: 248,
        height: 40,
    },
    button: {
        backgroundColor: '#3F5CFE',
        paddingTop: 5,
        paddingRight: 149,
        paddingBottom: 5,
        borderRadius: 30,
        paddingLeft: 149,
        width: 330,
        height: 50,
        top: 85,
        shadowColor: '#C6CFFF'
    },
    buttonText: {
        width: 70,
        height: 40,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 600,

    },
});

export default Signin