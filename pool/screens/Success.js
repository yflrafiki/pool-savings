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
          <Ionicons name="arrow-back-outline" size={24} color="#647BFE" />
        </View>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Ionicons name="checkmark-circle-outline" size={290} color="#4F8EF7" />
        <Text style={styles.successText}>Your savings have been locked! You don take chok!</Text>
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
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
    top: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    width: 310,
    height: 60,
    lineHeight: 30,
    fontSize: 20,
    fontWeight: 600,
    color: '#8D8A8A',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Success;
