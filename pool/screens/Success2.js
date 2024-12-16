import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Success2 = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack(); // Navigates back to the previous screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <View style={styles.circle}>
          <Ionicons name="arrow-back-outline" size={24} color="#4F8EF7" />
        </View>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View style={styles.icon}>
        <Ionicons name="checkmark-circle-outline" size={300} color="#3D5AFE"/>
        </View>
        <Text style={styles.successText}>Your goal has been confirmed! You don take chok!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  circle: {
    width: 36,
    height: 36,
    top: 56,
    borderRadius: 30,
    backgroundColor: '#FFFFFF', // Light gray background for the circular button
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    width: 294,
    height: 60,
    lineHeight: 30,
    fontSize: 19.6,
    fontWeight: 600,
    color: '#8D8A8A',
    textAlign: 'center',
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Success2;
