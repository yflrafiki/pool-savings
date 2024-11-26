import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Success = ({ navigation }) => {
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
        <Ionicons name="checkmark-circle-outline" size={120} color="#4F8EF7" />
        <Text style={styles.successText}>Your savings have been locked!</Text>
        <Text style={styles.subText}>You don take chok!</Text>
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0', // Light gray background for the circular button
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
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

export default Success;
