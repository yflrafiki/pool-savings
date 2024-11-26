import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FlatSavingPackage = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAcceptPress = () => {
    // Handle the accept action, navigate to the next screen or perform other actions
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="#4A4E69" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Flat Saving</Text>
          <Text style={styles.headerSubtitle}>Package</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionText}>
              This package offers a straightforward approach to saving by maintaining a fixed daily amount.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How it works</Text>
            <Text style={styles.sectionText}>
              The user's savings target is divided by the number of days in their plan, resulting in a consistent daily contribution amount.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Best for</Text>
            <Text style={styles.sectionText}>
              Users who prefer a predictable, consistent saving schedule.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Analysis</Text>
            <Text style={styles.sectionText}>
              Your goal is to save 300 cedis over 30 days, the daily saving amount would be 10 cedis per day.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptPress}>
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',  // Background color from the provided image
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  scrollContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  header: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    width: '100%',
    backgroundColor: '#C8CFFF',
    borderRadius: 10,
    padding: 20,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B7280',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E6DEDE',
    paddingBottom: 5,
  },
  sectionText: {
    fontSize: 14,
    color: '#111827',
  },
  acceptButton: {
    width: '100%',
    backgroundColor: '#4F8EF7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlatSavingPackage;
