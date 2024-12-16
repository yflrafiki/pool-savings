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
          <View style={styles.iconCircle}>
            <Icon name="arrow-back-outline" size={24} color="#647BFE" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
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
              <View key={entryIndex} style={[styles.entryContainer, entryIndex !== item.entries.length - 1 && styles.entrySeparator]}>
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
    width: 203,
    height: 40,
    lineHeight: 40,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
    top: 20,
  },
  backButton: {
    padding: 8,
  },
  iconCircle: {
    width: 36,
    height: 36,
    top: 20,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF14',
    top: 35,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000000',
  },
  searchIcon: {
    borderWidth: 1.5,
    marginRight: 10,
    borderColor: '#BFBFBF',
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  deductionGroup: {
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
    top: 45,
  },
  dateContainer: {
    height: 40,
    paddingVertical: 8,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
  },
  dateText: {
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    fontWeight: 500,
    color: '#8F8686',
    marginBottom: 8,
  },
  entryContainer: {
    paddingVertical: 8,
  },
  entryText: {
    width: 302,
    height: 40,
    lineHeight: 40,
    fontWeight: 400,
    fontSize: 16,
    color: '#000000',
  },
  entrySeparator: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
  },
});

export default Deductions;
