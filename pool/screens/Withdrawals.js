import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Withdrawals = () => {
  const navigation = useNavigation();

  const withdrawals = [
    {
      date: 'Oct 22, 2024',
      entries: [
        '¢50.00 withdrawn from Emergency goal',
        '¢30.00 withdrawn from Vacation goal'
      ]
    },
    {
      date: 'Oct 21, 2024',
      entries: [
        '¢20.00 withdrawn from New Laptop goal',
        '¢40.00 withdrawn from Emergency goal'
      ]
    },
    {
      date: 'Oct 20, 2024',
      entries: [
        '¢10.00 withdrawn from Vacation goal',
        '¢15.00 withdrawn from Emergency goal'
      ]
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Withdrawals</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back-outline" size={24} color="#4D80E4" />
        </TouchableOpacity>
      </View>

      {/* Search bar below the header */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A0A0A0"
        />
        <Icon name="search-outline" size={20} color="#A0A0A0" style={styles.searchIcon} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {withdrawals.map((item, index) => (
          <View key={index} style={styles.withdrawalGroup}>
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
    top: 50,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginTop: 100, // Adjusted to push the search bar below the header
    marginHorizontal: 16,
    paddingHorizontal: 10,
    height: 45, // Adjust the height of the search bar
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
    paddingTop: 20,
  },
  withdrawalGroup: {
    backgroundColor: '#E6E7EE',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  dateLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    marginBottom: 8,
  },
  entryTextContainer: {
    paddingVertical: 8,
  },
  entryTextContainerWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  entryText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Withdrawals;
