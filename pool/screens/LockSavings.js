import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LockSavings = ({ navigation }) => {
  const [goal, setGoal] = useState('New laptop');
  const [timeframe, setTimeframe] = useState('6 months');
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const goals = ['New laptop', 'Vacation', 'Emergency fund', 'Car', 'House'];

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
        <Ionicons name="arrow-back-circle-outline" size={30} color="#000000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Lock Savings</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.description}>
          Lock Savings securely to prevent early withdrawals.
        </Text>
        <View style={styles.fieldset}>
          <Text style={styles.legend}>Goal</Text>
          <TouchableOpacity onPress={handleGoalPress} style={styles.textInputContainer}>
            <Text style={styles.textInput}>{goal}</Text>
            <Ionicons name="chevron-down" size={24} color="#000000" style={styles.dropdownIcon} />
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
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={goals}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => handleGoalSelect(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    position: 'absolute',
    top: 80,
    left: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
  },
  fieldset: {
    marginBottom: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    paddingTop: 0,
  },
  legend: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#FFFFFF',
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    color: '#111827',
  },
  dropdownIcon: {
    marginLeft: 10,
  },
  lockButton: {
    backgroundColor: '#4F8EF7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  lockButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '60%',
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalItemText: {
    fontSize: 16,
    color: '#111827',
  },
  modalCloseButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: '#4F8EF7',
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20, // Added padding to prevent the box from covering the button and text
  },
  confirmationBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    position: 'absolute',
    top: '40%',
    left: '5%',
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 16,
    color: '#111827',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#4F8EF7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LockSavings;
