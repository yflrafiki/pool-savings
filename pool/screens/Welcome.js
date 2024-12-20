import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Welcome = ({ navigation }) => {

    const handleSignUp = () => {
        navigation.navigate('Signin');
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../assets/images/chok11.png')} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Welcome to Take Chok!</Text>
        <Text style={styles.subtitle1}> Save small today, enjoy big tomorrow!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
                <Icon name="google" size={20} color="#fff" style={styles.icon} />
                <Text style={styles.buttonText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={handleSignUp}>
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Use email or phone</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
            <Icon name="apple" size={24} color='#4285F4' />
            <Icon name="envelope" size={24} color='#4285F4' />
            <FontAwesome6 name="square-x-twitter" size={24} color="#4285F4" />
        </View>
        <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        height: 844,
    },
    logo: {
        width: 404,
        height: 343,
        marginTop: 21,
        left: -3,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'semi-bold',
        color: 'black',
        marginBottom: 40,
        width: 136,
        height: 40,
    },
    subtitle: {
        fontSize: 15,
        color: '#968B8B',
        textAlign: 'center',
        Top: 52,
        width: 180,
        height: 40,
        fontWeight: 500,
        
    },
    subtitle1: {
        fontSize: 16,
        color: '#968B8B',
        textAlign: 'center',
        Top: 78,
        width: 311,
        height: 40,
        fontWeight: 500,
    },
    icon: {
        width: 16,
        height: 19.68,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#647BFE',
        borderRadius: 30,        
        marginBottom: 149,
        width: 350,
        height: 50,
        shadowColor: '#C5CEFF'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 600,
    },
    secondaryButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#CCC9C9',
        borderRadius: 30,
        width: 310,
        height: 50,
        paddingTop: 5,
        paddingBottom: 15,
        paddingRight: 104,
        paddingLeft: 104,
        marginTop: -120
    },
    secondaryButtonText: {
        color: '#999393',
        fontSize: 15,
        width: 149,
        height: 40,
        fontWeight: 600,
        paddingTop: 14,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 146,
        height: 19.68,
        marginTop: 20,
        marginBottom: 20,
    },
    loginText: {
        color: '#555',
        fontSize: 16,
        width: 248,
        height: 40,
        marginTop: 20,
        
    },
    loginLink: {
        color: '#5F77FE',
        textDecorationLine: 'underline',
        fontWeight: 500,
        fontSize: 16,
        height: 40,
    },

});

export default Welcome;