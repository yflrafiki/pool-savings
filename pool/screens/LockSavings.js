import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LockSavings = ({ navigation }) => {
  const [timeframe, setTimeframe] = useState('6 months');
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLockSavingsPress = () => {
    setConfirmationVisible(true);
  };

  const handleConfirmPress = () => {
    setConfirmationVisible(false);
    navigation.navigate('Success');
    // Handle the confirmation action here, such as locking the savings
  };

  const handleGoalPress = () => {
    setModalVisible(true);
  };

  const handleGoalSelect = (selectedGoal) => {
    setGoal(selectedGoal);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <View style={styles.iconCircle}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="#647BFE" />
        </View>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Lock Savings</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.description}>
          Lock Savings securely to prevent early withdrawals.
        </Text>
        <View style={styles.fieldset}>
          <Text style={styles.legend}>Goal</Text>
          <TouchableOpacity onPress={handleGoalPress} style={styles.textInputContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInput}>New laptop</Text>
          </View>
          <Ionicons name="chevron-down" size={24} color="#999393" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldset}>
          <Text style={styles.legend}>Timeframe</Text>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInput}>{timeframe}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.lockButton} onPress={handleLockSavingsPress}>
          <Text style={styles.lockButtonText}>Lock Savings</Text>
        </TouchableOpacity>
      </View>

      

      <Modal
        visible={confirmationVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setConfirmationVisible(false)}
      >
        <View style={styles.confirmationContainer}>
          <View style={styles.confirmationBox}>
            <Text style={styles.confirmationText}>
              By confirming, savings will be locked and unavailable for withdrawal.
            </Text>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 80,
    right: 20,
    zIndex: 1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#C6CFFF40',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle: {
    width: 230,
    height: 40,
    lineHeight: 40,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
    position: 'absolute',
    top: 100,
    left: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    width: 318,
    height: 60,
    lineHeight: 30,
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 400,
    top: -30,
  },
  fieldset: {
    marginBottom: 20,
    width: 330,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC9C9',
    borderRadius: 12,
    padding: 10,
    top: 20,
  },
  legend: {
    height: 40,
    fontSize: 12,
    color: '#8D8A8A',
    marginBottom: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#FFFFFF',
    fontWeight: 500,
  },
  textInputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: 107,
    height: 40,
    lineHeight: 40,
    fontWeight: 500,
    fontSize: 16,
    color: '#000000',
    top: -20,
  },
  dropdownIcon: {
    top: -20,
    marginLeft: 10,
  },
  lockButton: {
    backgroundColor: '#647BFE',
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: 330,
    height: 50,
    top: 40,
  },
  lockButtonText: {
    width: 103,
    height: 40,
    lineHeight: 40,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 600,
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20, // Added padding to prevent the box from covering the button and text
  },
  confirmationBox: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    width: 431,
    height: 438,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#C6CFFF40',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  confirmationText: {
    width: 332,
    height: 90,
    lineHeight: 30,
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 400,
    top: 80,
  },
  confirmButton: {
    backgroundColor: '#3F5CFE',
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    borderRadius: 30,
    alignItems: 'center',
    width: 330,
    height: 50,
    marginTop: 10,
    top: 160,
  },
  confirmButtonText: {
    width: 64,
    height: 40,
    lineHeight: 40,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 600,
  },
});

export default LockSavings;
