import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const MobileMoneyApproval = ({ navigation }) => {
  return (
        <View style={styles.container}>
            <Image source={require('../assets/images/chok11.png')} style={styles.logo} />

            <Text style={styles.recommendationText}>We recommend linking your mobile money number for smooth automatic deductions and effortless savings.</Text>

            <View style={styles.approvalContainer}>
                <View style={styles.content}>
                    <Text style={styles.text}>Have you approved the mobile money integration message we sent?</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome2')}>
                        <Text style={styles.buttonText}>Yes, Link Up</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F1FF',
    },
    logo: {
        width: 313,
        height: 266,
        top: 14,
        marginBottom: 20,
    },
    recommendationText: {
        width: 330,
        height: 120,
        fontSize: 20,
        color: '#DEDCDC',
        textAlign: 'center',
        fontWeight: 400,
        marginTop: 50,
        lineHeight: 30,
    },
    approvalContainer: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 91.7,
        width: 430,
        height: 438,
        top: 37,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 15,
        elevation: 10,
    },
    content: {
        width: 330,
        height: 245,
        top: 83,
        right: 30,
        textAlign: 'center',
    },
    text: {
        width: 294,
        height: 90,
        top: 14,
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 100,
        lineHeight: 30,
        fontWeight: 400,
    },
    button: {
        width: 330,
        height: 50,
        backgroundColor: '#3F5CFE',
        paddingTop: 5,
        paddingRight: 149,
        paddingBottom: 5,
        paddingLeft: 149,
        borderRadius: 30,
        shadowColor: '#C6CFFF',
    },
    buttonText: {
        width: 88,
        height: 40,
        fontWeight: 600,
        color: '#FFFFFF', //yes link up
        fontSize: 14.8,
        textAlign: 'center',
        justifyContent: 'center',
        lineHeight: 40,
    },
});

export default MobileMoneyApproval