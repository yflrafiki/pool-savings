import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const MobileMoneyApproval = ({ navigation }) => {
  return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo1.png')} style={styles.logo} />

            <Text style={styles.recommendationText}>We recommend linking your mobile money number for smooth automatic deductions and effortless savings.</Text>

            <View style={styles.approvalContainer}>
                 <Text style={styles.text}>Have you approved the mobile money integration message we sent?</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome2')}>
                    <Text style={styles.buttonText}>Yes, Link Up</Text>
                </TouchableOpacity>
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
        backgroundColor: '#f5f5f5',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    recommendationText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    approvalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 91.7,
        width: '100%',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 15,
        elevation: 10,
    },
    text: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4285F4',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff', //yes link up
        fontSize: 16,
        textAlign: 'center',
    },
});

export default MobileMoneyApproval