import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Ensure you have installed expo/vector-icons

const PesewaSavePackage = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAcceptPress = () => {
    // Handle the accept action, navigate to the next screen or perform other actions
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color="#7B8794" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pesewa Save</Text>
          <Text style={styles.title}>Package</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionText}>
              A gradual savings method that begins with a small contribution and increases incrementally each day.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How it works</Text>
            <Text style={styles.sectionText}>
              Starting at just 1 pesewa, the daily saving amount increases by a small increment (e.g., 1 pesewa) each day until reaching the specified duration (e.g., 30 days).
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Best for</Text>
            <Text style={styles.sectionText}>
              Users who want to ease into saving with a smaller starting amount and gradually build up.
            </Text>
          </View>
        </View>
        <View style={styles.analysisCard}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Analysis</Text>
            <Text style={styles.sectionText}>
              Day 1: 1 pesewa{'\n'}
              Day 2: 2 pesewas{'\n'}
              Day 3: 3 pesewas{'\n'}
              continuing up to Day 30.
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
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    marginTop: 30,
  },
  scrollContainer: {
    paddingTop: 60,
    alignItems: 'flex-start',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
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
  analysisCard: {
    width: '100%',
    backgroundColor: '#C8CFFF',
    borderRadius: 10,
    padding: 20,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginBottom: 40,
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

export default PesewaSavePackage;