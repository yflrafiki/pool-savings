import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const toggleRememberMe = () => setRememberMe(!rememberMe);

  return (
            <View style={styles.container}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                <Image source={require('../assets/images/chok1.png')} style={styles.logo} resizeMode='contain' />
                </View>

                {/* Title*/}
                <Text style={styles.title}>Log In</Text>
                {/* input fields*/}
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                /> 
                <TextInput
                    style= {styles.input}
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType= "phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {/*Remember me and forgot password*/}
                <View style={styles.optionContainer}>
                    <View style={styles.rememberMeContainer}>
                        <Switch 
                            value={rememberMe}
                            onValueChange={toggleRememberMe}
                            trackColor={{ false: '#D3D3D3', true: '#007AFF' }}
                            thumbColor={rememberMe ? '#007AFF' : '#f4f3f4'}
                        />
                        <Text style={styles.optionText}>Remember me</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.optionText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                {/* log in button*/}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome2')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#f7f7f7',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 16,
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: {
        color: '#8a8a8a',
    },
    button: {
        height: 50,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default Login