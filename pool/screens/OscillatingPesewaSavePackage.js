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
          <View style={styles.iconCircle}>
          <Ionicons name="arrow-back-outline" size={24} color="#647BFE" />
          </View>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Oscillating</Text>
          <Text style={styles.title1}>Pesewa Save</Text>
          <Text style={styles.title2}>Package</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionText}>
              A dynamic saving method with a daily amount that fluctuates between a minimum and a set maximum.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle1}>How it works</Text>
            <Text style={styles.sectionText1}>
              The user sets a maximum daily saving limit (e.g., 5 cedis). The saving amount starts low, increases daily until reaching the maximum, then decreases back to the minimum before beginning a new cycle.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle2}>Best for</Text>
            <Text style={styles.sectionText2}>
              Users looking for flexibility and a varied savings pattern that suits changing cash flow.
            </Text>
          </View>
        </View>
        <View style={styles.analysisCard}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle3}>Analysis</Text>
            <Text style={styles.sectionText3}>
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
  iconCircle: {
    width: 36,
    height: 36,
    top: 30,
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
    width: 238,
    height: 160,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
  },
  title1: {
    width: 238,
    height: 160,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
    top: -110,
  },
  title2: {
    width: 238,
    height: 160,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
    top: -220,
  },
  card: {
    width: 349,
    height: 402,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 20,
    borderColor: '#C8CFFF',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#C6CFFF40',
    top: -340,
  },
  analysisCard: {
    width: 349,
    height: 124,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 20,
    borderColor: '#C8CFFF',
    borderWidth: 1,
    marginBottom: 40,
    shadowColor: '#C6CFFF40',
    top: -340,
  },
  section: {
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
    top: -30,
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
    top: -60,
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
    top: -25,
  },
  sectionText: {
    width: 290,
    height: 80,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  sectionText1: {
    width: 327,
    height: 120,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    top: -25,
  },
  sectionText2: {
    width: 311,
    height: 60,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    top: -50,
  },
  sectionText3: {
    width: 331,
    height: 80,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    top: -25,
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
    top: -300,
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

export default OscillatingPesewaSavePackage;
