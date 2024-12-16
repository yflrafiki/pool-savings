import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Deposits = () => {
  const navigation = useNavigation();

  const deposits = [
    {
      date: 'Oct 22, 2024',
      entries: [
        '¢100.00 deposited to New Laptop goal',
        '¢50.00 deposited to Vacation goal'
      ]
    },
    {
      date: 'Oct 21, 2024',
      entries: [
        '¢50.00 deposited to Vacation goal',
        '¢3.00 deposited to Emergency goal'
      ]
    },
    {
      date: 'Oct 20, 2024',
      entries: [
        '¢100.00 deposited to New Emergency goal',
        '¢100.00 deposited to New Laptop goal'
      ]
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Deposits</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.iconCircle}>
            <Icon name="arrow-back-outline" size={24} color="#647BFE" />

          </View>
        </TouchableOpacity>
      </View>

      {/* Search bar below the header */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor="#A0A0A0"
        />
        <Icon name="search-outline" size={20} color="#BFBFBF" style={styles.searchIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {deposits.map((item, index) => (
          <View key={index} style={styles.depositGroup}>
            <Text style={styles.dateText}>{item.date}</Text>
            <View style={styles.dateLine}></View> {/* Line below the date */}
            {item.entries.map((entry, entryIndex) => (
              <View key={entryIndex} style={[styles.entryTextContainer, entryIndex !== item.entries.length - 1 && styles.entryTextContainerWithBorder]}>
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
    position: 'absolute',
    top: 90,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    width: 155,
    height: 40,
    lineHeight: 40,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
  },
  backButton: {
    padding: 8,
  },
  iconCircle: {
    width: 36,
    height: 36,
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
    marginTop: 100, // Adjusted to push the search bar below the header
    marginHorizontal: 16,
    paddingHorizontal: 10,
    height: 32, // Adjust the height of the search bar
    borderWidth: 1,
    borderColor: '#C6CFFF',
    top: 20,
    shadowColor: '#C6CFFF14',
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
    paddingTop: 20,
  },
  depositGroup: {
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
    top: 30,
  },
  dateText: {
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    fontWeight: 500,
    color: '#8F8686',
    marginBottom: 8,
  },
  dateLine: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
    marginBottom: 8,
  },
  entryTextContainer: {
    paddingVertical: 8,
  },
  entryTextContainerWithBorder: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
  },
  entryText: {
    width: 315,
    height: 40,
    lineHeight: 40,
    fontWeight: 400,
    fontSize: 16,
    color: '#000000',
    left: 6,
  },
});

export default Deposits;
