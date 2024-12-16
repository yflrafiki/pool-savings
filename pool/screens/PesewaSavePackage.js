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
          <View style={styles.iconCircle}>
          <Ionicons name="arrow-back-outline" size={24} color="#647BFE" />
          </View>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pesewa Save</Text>
          <Text style={styles.title1}>Package</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionText}>
              A gradual savings method that begins with a small contribution and increases incrementally each day.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle1}>How it works</Text>
            <Text style={styles.sectionText1}>
              Starting at just 1 pesewa, the daily saving amount increases by a small increment (e.g., 1 pesewa) each day until reaching the specified duration (e.g., 30 days).
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle2}>Best for</Text>
            <Text style={styles.sectionText2}>
              Users who want to ease into saving with a smaller starting amount and gradually build up.
            </Text>
          </View>
        </View>
        <View style={styles.analysisCard}>
          <View style={styles.section3}>
            <Text style={styles.sectionTitle3}>Analysis</Text>
            <Text style={styles.sectionText3}>
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
  scrollContainer: {
    paddingTop: 60,
    alignItems: 'flex-start',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    width: 228,
    height: 80,
    lineHeight: 40,
    fontSize: 35.6,
    fontWeight: 500,
    color: '#000000',
  },
  title1: {
    width: 228,
    height: 80,
    lineHeight: 40,
    fontSize: 35.6,
    fontWeight: 500,
    color: '#000000',
    top: -35,
  },
  card: {
    width: 349,
    height: 376,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 20,
    borderColor: '#C8CFFF',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#C6CFFF40',
    top: -60,
  },
  analysisCard: {
    width: 349,
    height: 140,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 20,
    borderColor: '#C8CFFF',
    borderWidth: 1,
    marginBottom: 40,
    top: -50,
    shadowColor: '#C6CFFF40',
  },
  section: {
    width: 328,
    height: 100,
    marginBottom: 15,
  },
  section3: {
    width: 318,
    height: 129,
    marginBottom: 15,
  },
  sectionTitle: {
    width: 318,
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    fontWeight: 400,
    color: '#8D8A8A',
    marginBottom: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
    paddingBottom: 5,
  },
  sectionTitle1: {
    width: 318,
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    fontWeight: 400,
    color: '#8D8A8A',
    marginBottom: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
    paddingBottom: 5,
  },
  sectionTitle2: {
    width: 318,
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    fontWeight: 400,
    color: '#8D8A8A',
    marginBottom: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
    paddingBottom: 5,
  },
  sectionTitle3: {
    width: 318,
    lineHeight: 40,
    height: 40,
    fontSize: 14,
    fontWeight: 400,
    color: '#8D8A8A',
    marginBottom: 5,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
    paddingBottom: 5,
    top: -20,
  },
  sectionText: {
    width: 328,
    height: 80,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  sectionText1: {
    width: 323,
    height: 80,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  sectionText2: {
    width: 324,
    height: 60,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  sectionText3: {
    width: 185,
    height: 85,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    top: -15,
  },
  acceptButton: {
    width: 330,
    height: 50,
    backgroundColor: '#3F5CFE',
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#C6CFFF',
    left: 30,
    top: 50,
  },
  acceptButtonText: {
    width: 56,
    height: 40,
    lineHeight: 40,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 600,
  },
});

export default PesewaSavePackage;