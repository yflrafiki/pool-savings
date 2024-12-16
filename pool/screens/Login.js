import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
                <Image source={require('../assets/images/chok11.png')} style={styles.logo} resizeMode='contain' />
                </View>

                {/* Title*/}
                <Text style={styles.title}>Log In</Text>
                {/* input fields*/}
                <View style={styles.fieldset}>
                    <View style={styles.fieldsetItem}>
                        <Text style={styles.legend}>Email</Text>
                        <TextInput
                         style={styles.input}
                         placeholder='athsius@gmail.com'
                         placeholderTextColor={'#000000'}
                         value={email}
                         onChangeText={setEmail}
                         keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.fieldsetItem}>
                        <Text style={styles.legend}>Phone number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+233 203871640"
                            placeholderTextColor={'#000000'}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
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
                {/*Remember me and forgot password*/}
                <View style={styles.optionContainer}>
                    <View style={styles.rememberMeContainer}>
                        <Switch 
                            value={rememberMe}
                            onValueChange={toggleRememberMe}
                            trackColor={{ false: '#D3D3D3', true: '#007AFF' }}
                            thumbColor={rememberMe ? '#007AFF' : '#f4f3f4'}
                        />
                        <Text style={styles.optionText1}>Remember me</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.optionText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
            <Icon name="apple" size={24} color='#4285F4' />
            <Icon name="envelope" size={24} color='#4285F4' />
            <FontAwesome6 name="square-x-twitter" size={24} color="#4285F4" />
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
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 313,
        height: 266,
    },
    title: {
        fontSize: 36,
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: 20,
        color: '#000000'
    },
    fieldset: {
        width: 330,
        height: 218,
        top: 68,
      },
      fieldsetItem: {
        marginBottom: 10,
        position: 'relative',
        width: '100%',
      },
      legend: {
        position: 'absolute',
        top: -8,
        left: 15,
        fontSize: 12,
        zIndex: 1,
        height: 40,
        fontWeight: 500,
        color: '#8D8A8A',
        paddingHorizontal: 5,
      },
    input: {
        borderColor: '#CCC9C9',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginBottom: 16,
        width: 330,
        height: 50,
        borderRadius: 12,
    },
    input1: {
        width: 330,
        height: 50,
        borderWidth: 1,
        top: 1,
        borderRadius: 12,
        borderColor: '#3852E7',
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 80,
        width: 349,
        height: 40,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 20,
        height: 40,
    },
    optionText1: {
        fontSize: 16,
        width: 112,
        height: 40,
        color: '#968B8B',
    },
    optionText: {
        fontSize: 16,
        color: '#968B8B',
        width: 139,
        height: 40,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        width: 146,
        height: 19.68,
        marginTop: 120,
        marginBottom: -100,
        left: 101,
    },
    button: {
        width: 330,
        height: 50,
        top: 133,
        left: 9,
        paddingTop: 5,
        paddingRight: 149,
        paddingLeft: 149,
        paddingBottom: 5,
        backgroundColor: '#3E5BFE',
        justifyContent: 'center',
        shadowColor: '#C6CFFF',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: 16,
        width: 47,
        height: 40,
        
    }
})

export default Login