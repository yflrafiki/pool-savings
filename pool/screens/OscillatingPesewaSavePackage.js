import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OscillatingPesewaSavePackage = ({ navigation }) => {
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
          <Text style={styles.title}>Oscillating</Text>
          <Text style={styles.title}>Pesewa Save</Text>
          <Text style={styles.title}>Package</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionText}>
              A dynamic saving method with a daily amount that fluctuates between a minimum and a set maximum.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>How it works</Text>
            <Text style={styles.sectionText}>
              The user sets a maximum daily saving limit (e.g., 5 cedis). The saving amount starts low, increases daily until reaching the maximum, then decreases back to the minimum before beginning a new cycle.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Best for</Text>
            <Text style={styles.sectionText}>
              Users looking for flexibility and a varied savings pattern that suits changing cash flow.
            </Text>
          </View>
        </View>
        <View style={styles.analysisCard}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Analysis</Text>
            <Text style={styles.sectionText}>
              Starting at 5 cedis, Day 1 would be 5 cedis, Day 2 could be 4.9 cedis, Day 3: 4.8 cedis, gradually reducing to 1 pesewa.
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

export default OscillatingPesewaSavePackage;
