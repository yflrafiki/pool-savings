import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Welcome = ({ navigation }) => {

    const handleSignUp = () => {
        navigation.navigate('Signup');
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../assets/images/chok1.png')} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Welcome to Take Chai!</Text>
        <Text style={styles.subtitle}> Save small today, enjoy big tomorrow!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
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
        padding: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4285F4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,        
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
    secondaryButton: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    secondaryButtonText: {
        color: '#555',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 20,
        marginBottom: 20,
    },
    loginText: {
        color: '#555',
        fontSize: 14,
    },
    loginLink: {
        color: '#4285F4',
        textDecorationLine: 'underline',
    },

});

export default Welcome;