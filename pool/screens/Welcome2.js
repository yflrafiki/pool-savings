import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Card, Icon} from 'react-native-elements';



const Welcome2 = ({ route, navigation }) => {
    const { username } = route.params || {};  
    const firstLetter = username ? username.charAt(0).toUpperCase() : '';

    const handleSetGoal = () => {
        // Navigation or action for set goal
        console.log('set Goal pressed');
    }

    const handleLockSavings = () => {
        // Navigation or action for lock savings
        console.log('lock savings pressed');
    }

    const handleWithdraw = () => {
        // Navigation or action for withdraw
        console.log('Withdraw pressed');
    }

    const handlePauseDeductions = () => {
        // Navigation or action for Pause Deduction
        console.log('pause deduction pressed');
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{firstLetter}</Text>
          </View>
        </View>
  
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Current Balance:</Text>
          <Text style={styles.balance}>GHS 1000.00</Text>
        </Card>
  
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>You’re almost there</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressIndicatorStart} />
              <View style={styles.progressIndicatorGrow} />
              <View style={styles.progressIndicatorAchieve} />
            </View>
            <View style={styles.progressLabels}>
              <View style={styles.progressLabelContainer}>
                <Text style={styles.progressLabel}>Start</Text>
                <Text style={styles.progressMonth}>Month 1</Text>
              </View>
              <View style={styles.progressLabelContainer}>
                <Text style={styles.progressLabel}>Grow</Text>
                <Text style={styles.progressMonth}>Month 2</Text>
              </View>
              <View style={styles.progressLabelContainer}>
                <Text style={styles.progressLabel}>Achieve</Text>
                <Text style={styles.progressMonth}>Month 3</Text>
              </View>
            </View>
          </View>
        </Card>
  
        <Card containerStyle={styles.card}>
          <Text style={styles.cardTitle}>Your deductions</Text>
          <View style={styles.deductionRow}>
            <Text style={styles.deductionText}>My girlfriend</Text>
            <Text style={styles.deductionAmount}>GHS 5</Text>
          </View>
          <View style={styles.deductionRow}>
            <Text style={styles.deductionText}>My new phone</Text>
            <Text style={styles.deductionAmount}>GHS 5</Text>
          </View>
        </Card>
  
      <Card containerStyle={styles.iconCard}>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconContainer} onPress={handleSetGoal}>
            <View style={styles.iconBox}>
              <Icon name="trending-up" type="material" color="#007AFF" size={40} />
              <Text style={styles.iconLabel}>Set Goal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={handleLockSavings}>
            <View style={styles.iconBox}>
              <Icon name="lock" type="material" color="#007AFF" size={40} />
              <Text style={styles.iconLabel}>Lock Savings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={handleWithdraw}>
            <View style={styles.iconBox}>
              <Icon name="money" type="material" color="#007AFF" size={40} />
              <Text style={styles.iconLabel}>Withdraw</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={handlePauseDeductions}>
            <View style={styles.iconBox}>
              <Icon name="pause" type="material" color="#007AFF" size={40} />
              <Text style={styles.iconLabel}>Pause Deductions</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Card>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      padding: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    avatar: {
      backgroundColor: '#007AFF',
      borderRadius: 20,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    card: {
      borderRadius: 10,
      marginBottom: 15,
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    iconCard: {
      borderRadius: 10,
      padding: 10, 
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 16,
      marginBottom: 10,
    },
    balance: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    progressBarContainer: {
      marginTop: 10,
    },
    progressBar: {
      flexDirection: 'row',
      height: 10,
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
      overflow: 'hidden',
    },
    progressIndicatorStart: {
        flex: 1,
        backgroundColor: 'red',
    },
    progressIndicatorGrow: {
        flex: 1,
        backgroundColor: 'orange',
    },
    progressIndicatorAchieve: {
        flex: 1,
        backgroundColor: 'green',
    },
    progressLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    progressLabelContainer: {
      alignItems: 'center',
    },
    progressLabel: {
      fontSize: 14,
      color: '#555',
    },
    progressMonth: {
      fontSize: 12,
      color: '#999',
    },
    deductionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    deductionText: {
      fontSize: 16,
    },
    deductionAmount: {
      fontSize: 16,
    },
    iconRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'center',
  

    },
    iconContainer: {
      width: '45%',
      marginVertical: 10,
      alignItems: 'center',
    },
    iconBox: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
      width: '100%',
      justifyContent:'center',
    },
    iconLabel: {
      marginTop: 5,
      fontSize: 14,
      color: '#007AFF',
      textAlign: 'center',
    },
  });

export default Welcome2