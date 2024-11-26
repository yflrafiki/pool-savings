import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Deductions = () => {
  const navigation = useNavigation();

  const deductions = [
    {
      date: 'Oct 22, 2024',
      entries: [
        '¢5.00 fee deducted for New Laptop goal',
        '¢3.00 fee deducted for Vacation goal'
      ]
    },
    {
      date: 'Oct 21, 2024',
      entries: [
        '¢2.50 fee deducted for Emergency goal',
        '¢3.00 fee deducted for Vacation goal'
      ]
    },
    {
      date: 'Oct 20, 2024',
      entries: [
        '¢3.00 fee deducted for Vacation goal',
        '¢5.00 fee deduction for New Laptop goal'
      ]
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Deductions</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back-outline" size={24} color="#4D80E4" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A0A0A0"
        />
        <Icon name="search-outline" size={20} color="#A0A0A0" style={styles.searchIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {deductions.map((item, index) => (
          <View key={index} style={styles.deductionGroup}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            {item.entries.map((entry, entryIndex) => (
              <View key={entryIndex} style={[styles.entryContainer, styles.entrySeparator]}>
                <Text style={styles.entryText}>{entry}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  backButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6E7EE',
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000000',
  },
  searchIcon: {
    marginRight: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  deductionGroup: {
    backgroundColor: '#E6E7EE',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  dateContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  entryContainer: {
    paddingVertical: 8,
  },
  entryText: {
    fontSize: 16,
    color: '#000000',
  },
  entrySeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
  },
});

export default Deductions;
