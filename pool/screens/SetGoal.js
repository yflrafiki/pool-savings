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

    const handleConfirmPress = () => {
      setIsConfirmVisible(false);
      navigation.navigate('Success2');
      // Handle the confirmation action here, such as set Goals
    };

  return (
    <View style={styles.container}>
      {/* Header with back arrow */}
      <View style={styles.header}>
        <Text style={styles.title}>Set Goal</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.iconCircle}>
            <Icon name="arrow-back-circle-outline" size={28} color="#647BFE" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Form Fields with Fieldset Effect */}
      <View style={styles.fieldsetContainer}>
        <View style={styles.fieldset}>
          <Text style={styles.fieldLabel}>Goal</Text>
          <TextInput style={styles.input} placeholder="New laptop" />
        </View>

        <View style={styles.fieldset1}>
          <Text style={styles.fieldLabel1}>Description</Text>
          <TextInput
            style={[styles.input1, styles.descriptionInput]}
            placeholder="My new laptop for work related programming and gigs."
            multiline
          />
        </View>

        <View style={styles.fieldset2}>
          <Text style={styles.fieldLabel2}>Amount</Text>
          <TextInput style={styles.input2} placeholder="500" keyboardType="numeric" />
        </View>

        <View style={styles.fieldset3}>
          <Text style={styles.fieldLabel3}>Timeframe</Text>
          <TextInput style={styles.input3} placeholder="6 months" />
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

          <TouchableOpacity style={styles.planItem1} onPress={() => navigation.navigate('PesewaSavePackage')}>
            <View style={styles.planIcon}>
              <Icon name="water-outline" size={24} color="#6E7DFF" />
            </View>
            <Text style={styles.planText1}>Pesewa Save Package</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.plansRow}>
          <TouchableOpacity style={styles.planItem2} onPress={() => navigation.navigate('OscillatingPesewaSavePackage')}>
            <View style={styles.planIcon}>
              <Icon name="leaf-outline" size={24} color="#6E7DFF" />
            </View>
            <Text style={styles.planText2}>Oscillating Pesewa Save Package</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.planItem3} onPress={() => navigation.navigate('PesewaSaveInReversePackage')}>
            <View style={styles.planIcon}>
              <Icon name="lock-closed-outline" size={24} color="#6E7DFF" />
            </View>
            <Text style={styles.planText3}>Pesewa Save in Reverse Package</Text>
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
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
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
    top: 50,
  },

  title: {
    width: 146,
    height: 40,
    lineHeight: 40,
    fontSize: 35.2,
    fontWeight: 500,
    color: '#000000',
  },

  backButton: {
    padding: 5,
  },
  iconCircle: {
    width: 36,
    height: 36,
    top: 5,
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
  confirmationBox: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    width: 431,
    height: 470,
    backgroundColor: '#F9FAFF',
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
    width: 319,
    height: 60,
    lineHeight: 30,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 50,
    color: '#000000',
    fontWeight: 400,
  },
  confirmButton: {
    backgroundColor: '#3F5CFE',
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    borderRadius: 30,
    marginTop: 50,
    width: 330,
    height: 50,
    alignItems: 'center',
    shadowColor: '#C6CFFF',
  },
  confirmButtonText: {
    width: 63,
    height: 40,
    lineHeight: 40,
    color: '#FFFFFF',
    fontSize: 15.6,
    fontWeight: 600,
  },
  fieldsetContainer: {
    width: 330,
    height: 414,
    left: 10,
    marginVertical: 20,
    top: 50,
  },

  fieldset: {
    width: 330,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC9C9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 30,
    backgroundColor: '#FAFCFF',
    position: 'relative',
  },
  fieldset1: {
    width: 330,
    height: 78,
    borderWidth: 1,
    borderColor: '#CCC9C9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 30,
    backgroundColor: '#FDFEFF',
    position: 'relative',
  },
  fieldset2: {
    width: 330,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC9C9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 30,
    backgroundColor: '#FDFEFF',
    position: 'relative',
  },
  fieldset3: {
    width: 330,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC9C9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 30,
    backgroundColor: '#FDFEFF',
    position: 'relative',
  },
  
  fieldLabel: {
    height: 40,
    lineHeight: 40,
    position: 'absolute',
    top: -20,
    left: 10,
    backgroundColor: '#FBFCFF',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#8D8A8A',
    fontWeight: 500,
  },
  fieldLabel1: {
    height: 40,
    lineHeight: 40,
    position: 'absolute',
    top: -20,
    left: 15,
    backgroundColor: '#FDFEFF',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#8D8A8A',
    fontWeight: 500,
  },
  fieldLabel2: {
    height: 40,
    lineHeight: 40,
    position: 'absolute',
    top: -20,
    left: 15,
    backgroundColor: '#FDFEFF',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#8D8A8A',
    fontWeight: 500,
  },
  fieldLabel3: {
    height: 40,
    lineHeight: 40,
    position: 'absolute',
    top: -20,
    left: 15,
    backgroundColor: '#FDFEFF',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#8D8A8A',
    fontWeight: 500,
  },

  input: {
    width: 107,
    height: 40,
    lineHeight: 40,
    top: -10,
    left: 16,
    marginTop: 8,
    fontSize: 15.2,
    color: '#000000',
    fontWeight: 500,
  },
  input1: {
    width: 242,
    height: 60,
    lineHeight: 30,
    top: -20,
    left: 16,
    marginTop: 20,
    fontSize: 15.2,
    color: '#000000',
    fontWeight: 500,
  },
  input2: {
    width: 107,
    height: 40,
    lineHeight: 40,
    top: -5,
    left: 16,
    marginTop: 8,
    fontSize: 15.2,
    color: '#000000',
    fontWeight: 500,
  },
  input3: {
    width: 107,
    height: 40,
    lineHeight: 40,
    top: -5,
    left: 16,
    marginTop: 8,
    fontSize: 15.2,
    color: '#000000',
    fontWeight: 500,
  },

  descriptionInput: {
    height: 60,
    textAlignVertical: 'top',
  },

  savingPlansContainer: {
    width: 349,
    height: 261,
    top: -11,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C8CFFF',
    shadowColor: '#C6CFFF40',
  },

  savingPlansTitle: {
    width: 120,
    height: 40,
    lineHeight: 40,
    top: -5,
    left: 111,
    fontSize: 20,
    fontWeight: 400,
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },

  plansRow: {
    width: 231,
    height: 187,
    top: 40,
    left: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  planItem: {
    alignItems: 'center',
    width: 62,
    height: 89,
    top: -65,
  },
  planItem1: {
    alignItems: 'center',
    width: 62,
    height: 89,
    top: -65,
  },
  planItem2: {
    alignItems: 'center',
    width: 62,
    height: 89,
    top: -170,
  },
  planItem3: {
    alignItems: 'center',
    width: 62,
    height: 89,
    top: -170,
  },

  planIcon: {
    width: 56,
    height: 56,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    left: 3,
    borderWidth: 1,
    borderColor: '#647BFE',
    shadowColor: '#C6CFFF40',
  },

  planText: {
    width: 117,
    height: 40,
    lineHeight: 40,
    left: -5,
    fontSize: 11.6,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 600,
  },
  planText1: {
    width: 130,
    height: 40,
    lineHeight: 40,
    left: -5,
    fontSize: 11.6,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 600,
  },
  planText2: {
    width: 142,
    height: 40,
    lineHeight: 20,
    fontSize: 11.6,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 600,
    left: -5,
  },
  planText3: {
    width: 140,
    height: 40,
    lineHeight: 20,
    fontSize: 11.6,
    left: -5,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 600,
  },

  doneButton: {
    width: 330,
    height: 50,
    backgroundColor: '#3E5BFE',
    borderRadius: 30,
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#C6CFFF',
    top: 30,
  },

  doneButtonText: {
    width: 41,
    height: 40,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 40,
  },
});

export default SetGoal;
