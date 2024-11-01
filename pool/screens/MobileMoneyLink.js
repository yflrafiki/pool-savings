import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react'

const MobileMoneyLink = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
    content: {
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 18,
        color: 'black', //text color
        textAlign: 'center',
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default MobileMoneyLink