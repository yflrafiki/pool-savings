import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react'

const MobileMoneyLink = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../assets/images/chok11.png')} style={styles.logo} />
        <View style={styles.content}>
            <Text style={styles.text}>We recommend linking your mobile money number for smooth automatic deductions and effortless savings.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MobileMoneyApproval')}>
                <Text style={styles.buttonText}>Yes, Link Up</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white' // background color
    },
    logo: {
        width: 313,
        height: 266,
        top: 4,
        marginBottom: 20,
    },
    content: {
        width: 339,
        height: 280,
        alignItems: 'center',
        paddingTop: 28,
    },
    text: {
        lineHeight: 30,
        width: 330,
        height: 120,
        fontSize: 20,
        fontWeight: 400,
        color: '#000000', //text color
        textAlign: 'center',
        marginBottom: 32,
    },
    button: {
        width: 330,
        height: 50,
        backgroundColor: '#3F5CFE',
        top: 198,
        left: 5,
        paddingTop: 5,
        paddingRight: 149,
        paddingBottom: 5,
        paddingLeft: 149,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#C6CFFF'
    },
    buttonText: {
        width: 88,
        height: 40,
        color: '#FFFFFF',
        fontSize: 14.8,
        fontWeight: 600,
    },
});

export default MobileMoneyLink