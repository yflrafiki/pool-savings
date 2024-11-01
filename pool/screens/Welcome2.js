import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {LinearGradient } from 'expo-linear-gradient';



const Welcome2 = () => {
    const [balance, setBalance] = useState(1000.00);
    const [progress, setProgress] = useState(0.6);
    const [deductions, setDeduction] = useState({
        girlfriend: 5,
        phone: 5,
    });

    const handleDeduction = (amount) => {
        setBalance(balance - amount);
    };
  return (
    <View style={styles.container}>
        <View style={styles.header}>
                <Text style={styles.title}>Welcome</Text>
            <TouchableOpacity>
                <Image source={require('../assets/images/logo1.png')} style={styles.avatarIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
            <View style={styles.box}>
                <Text style={styles.balanceTitle}>Current Balance:</Text>
                <Text style={styles.balance}>GHS {balance.toFixed(2)}</Text>
            </View>
        </View>
        <View style={styles.almostThereContainer}>
            <View style={styles.box}>
                <Text style={styles.subTitle}>You're almost there</Text>
                <LinearGradient 
                    colors={['#F88379', '#FDD260', '#CDE08C']}
                    style={styles.progressBar}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                >
                    <View style={styles.progressFill} />
                </LinearGradient>
                <View style={styles.progressLabels}>
                    <Text style={styles.progressLabel}>Start</Text>
                    <Text style={styles.progressLabel}>Grow</Text>
                    <Text style={styles.progressLabel}>Achieve</Text>
                </View>
            </View>
        </View>
        <View style={styles.deductionsContainer}>
            <View style={styles.box}>
                <Text style={styles.deductionsTitle}>Your deductions</Text>
                <View style={styles.deductionList}>
                    {Object.keys(deductions).map((key,index)=>(
                        <View key={index} style={styles.deductionItem}>
                            <Text style={styles.deductionText}>{key}</Text>
                            <Text style={styles.deductionAmount}>GHS {deductions[key]}</Text>

                        </View>
                    ))}
                </View>
            </View>
        </View>
        <View style={styles.actionContainer}>
            <View style={styles.box}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                    <Entypo name="bar-graph" size={24} color="blue"  style={styles.actionIcon} />
                        <Text style={styles.actionText}>Set Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <FontAwesome6 name="money-bills" size={24} color="blue" style={styles.actionIcon} />
                        <Text style={styles.actionText}>Withdraw</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                    <EvilIcons name="lock" size={24} color="blue" style={styles.actionIcon} />
                        <Text style={styles.actionText}>Lock Savings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                    <MaterialCommunityIcons name="motion-pause" size={24} color="blue" style={styles.actionIcon} />
                        <Text style={styles.actionText}>Pause Deductions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        padding: 20,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderBottomWidth: 1,
        borderBlockColor: '#E5E5E5',
    },
    avatarIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    balanceContainer: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
    },
    almostThereContainer: {
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
    },
    deductionsContainer: {
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
    },
    actionContainer: {
        alignItems: 'center',
        marginVertical: 10,
        width: '100%',
    },
    progressFill: {
        height: '100%',
        width: `${progress * 100}%`,
    },
    box: {
        backgroundColor: '#F7FAFF',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        alignContent: 'center',
        marginVertical: 10,
    },
    balanceTitle: {
        fontSize: 18,
        color: '#333',
    },
    balance: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 18,
        color: '#555',
        marginVertical: 10,
    },
    progressBar: {
        width: '80%',
        height: 20,
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    progress: {
        width: '70%',
        height: '100%',
        backgroundColor: '#4caf50',
        marginBottom: 10,
    },
    progressLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    progressLabel: {
        fontSize: 14,
    },
    deductionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    deductions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        paddingVertical: 5,
    },
    deductionItem: {
        fontSize: 16,
    },
    deductionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 20,
    },
    actionButton: {
        width: '40%',
        padding: 10,
        margin: 5,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        borderRadius: 5,
    },
    actionIcon: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    actionText: {
        color: '#333',
        fontSize: 16,
    },
});

export default Welcome2