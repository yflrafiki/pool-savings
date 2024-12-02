import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import React, { useState } from 'react';

const { height } = Dimensions.get('window');


const SetGoal = ({ navigation }) => {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const translateY = useSharedValue(height);

  const showConfirmation = () => {
    setIsConfirmVisible(true);
    translateY.value = withTiming(0.00001, { duration: 500 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

    const hideConfirmation = () => {
        translateY.value = withTiming(height, { duration: 100 }); // Slide-out animation
        setTimeout(() => setIsConfirmVisible(false), 100); // Hide after animation
    };

  return (
    <View style={styles.container}>
      {/* Header with back arrow */}
      <View style={styles.header}>
        <Text style={styles.title}>Set Goal</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back-circle-outline" size={28} color="#6E7DFF" />
        </TouchableOpacity>
      </View>

      {/* Form Fields with Fieldset Effect */}
      <View style={styles.fieldsetContainer}>
        <View style={styles.fieldset}>
          <Text style={styles.fieldLabel}>Goal</Text>
          <TextInput style={styles.input} placeholder="New laptop" />
        </View>

        <View style={styles.fieldset}>
          <Text style={styles.fieldLabel}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="My new laptop for work related programming and gigs."
            multiline
          />
        </View>

        <View style={styles.fieldset}>
          <Text style={styles.fieldLabel}>Amount</Text>
          <TextInput style={styles.input} placeholder="500" keyboardType="numeric" />
        </View>

        <View style={styles.fieldset}>
          <Text style={styles.fieldLabel}>Timeframe</Text>
          <TextInput style={styles.input} placeholder="6 months" />
        </View>
      </View>

      {/* Saving Plans */}
      <View style={styles.savingPlansContainer}>
        <Text style={styles.savingPlansTitle}>Saving Plans</Text>
        <View style={styles.plansRow}>
          <TouchableOpacity
            style={styles.planItem}
            onPress={() => navigation.navigate('FlatSavingPackage')}
          >
            <View style={styles.planIcon}>
              <Icon name="bulb-outline" size={24} color="#6E7DFF" />
            </View>
            <Text style={styles.planText}>Flat Saving Package</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.planItem} onPress={() => navigation.navigate('PesewaSavePackage')}>
            <View style={styles.planIcon}>
              <Icon name="water-outline" size={24} color="#6E7DFF" />
            </View>
            <Text style={styles.planText}>Pesewa Save Package</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.plansRow}>
          <TouchableOpacity style={styles.planItem} onPress={() => navigation.navigate('OscillatingPesewaSavePackage')}>
            <View style={styles.planIcon}>
              <Icon name="leaf-outline" size={24} color="#6E7DFF" />
            </View>
            <Text style={styles.planText}>Oscillating Pesewa Save Package</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.planItem} onPress={() => navigation.navigate('PesewaSaveInReversePackage')}>
            <View style={styles.planIcon}>
              <Icon name="lock-closed-outline" size={24} color="#6E7DFF" />
            </View>
            <Text style={styles.planText}>Pesewa Save in Reverse Package</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton} onPress={showConfirmation}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      {isConfirmVisible && (
        <Animated.View style={[styles.confirmationBox, animatedStyle]}>
          <Text style={styles.confirmationText}>
            By confirming, deductions will be made from your account.
          </Text>
          <TouchableOpacity style={styles.confirmButton} onPress={hideConfirmation}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F9FAFF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },

  backButton: {
    padding: 5,
  },
  confirmationBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    left: '5%',
  },
  confirmationText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 50,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 50,
    width: '80%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fieldsetContainer: {
    marginVertical: 20,
  },

  fieldset: {
    borderWidth: 1,
    borderColor: '#CCC9C9',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 30,
    backgroundColor: '#F5F7FF',
    position: 'relative',
  },

  fieldLabel: {
    position: 'absolute',
    top: -12,
    left: 15,
    backgroundColor: '#F9FAFF',
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#CCC9C9',
  },

  input: {
    marginTop: 8,
    fontSize: 16,
    color: '#000000',
  },

  descriptionInput: {
    height: 60,
    textAlignVertical: 'top',
  },

  savingPlansContainer: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#C8CFFF',
    borderRadius: 10,
  },

  savingPlansTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },

  plansRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  planItem: {
    alignItems: 'center',
    width: '48%',
  },

  planIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  planText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    fontWeight: '600',
  },

  doneButton: {
    backgroundColor: '#3E5BFE',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },

  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SetGoal;
