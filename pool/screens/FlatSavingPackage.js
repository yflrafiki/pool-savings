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
        <View style={styles.iconCircle}>
      <Ionicons name="arrow-back-circle-outline" size={30} color="#647BFE" />
        </View>
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
            <Text style={styles.sectionTitle1}>How it works</Text>
            <Text style={styles.sectionText1}>
              The user's savings target is divided by the number of days in their plan, resulting in a consistent daily contribution amount.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle2}>Best for</Text>
            <Text style={styles.sectionText2}>
              Users who prefer a predictable, consistent saving schedule.
            </Text>
          </View>
        </View>
        <View style={styles.card1}>
          <View style={styles.section1}>
            <Text style={styles.sectionTitle3}>Analysis</Text>
            <Text style={styles.sectionText3}>
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
  iconCircle: {
    width: 36,
    height: 36,
    top: 56,
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
    paddingVertical: 40,
    alignItems: 'center',
  },
  header: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
    left: 20,
  },
  headerTitle: {
    width: 200,
    height: 80,
    lineHeight: 40,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
    top: 46,
  },
  headerSubtitle: {
    width: 200,
    height: 80,
    lineHeight: 40,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
    top: 10,
  },
  card: {
    width: 349,
    height: 340,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 20,
    borderColor: '#C8CFFF',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#C6CFFF40',
    top: -20,
  },
  card1: {
    width: 349,
    height: 124,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 20,
    borderColor: '#C8CFFF',
    borderWidth: 1,
    marginBottom: 20,
    shadowColor: '#C6CFFF40',
    top: 20,
  },
  section: {
    width: 331,
    marginBottom: 15,
    top: 3,
  },
  section1: {
    width: 328,
    height: 104,
    top: 3,
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
    top: -10,
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
    top: -40,
  },
  sectionTitle3: {
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
    top: -10,
  },
  sectionText: {
    width: 319,
    height: 60,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  sectionText1: {
    width: 322,
    height: 80,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    top: -5,
  },
  sectionText2: {
    width: 326,
    height: 40,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    top: -35,
  },
  sectionText3: {
    width: 325,
    height: 60,
    lineHeight: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    top: -10,
  },
  acceptButton: {
    width: 330,
    height: 50,
    top: 139,
    backgroundColor: '#3F5CFE',
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#C6CFFF',
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

export default FlatSavingPackage;
