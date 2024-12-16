import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const History = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>History</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.iconCircle}>
          <Icon name="arrow-back-outline" size={24} color="#647BFE" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Deductions')}>
          <Text style={styles.itemText}>Deductions</Text>
          <Icon name="chevron-forward-outline" size={24} color="#999393" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Deposits')}>
          <Text style={styles.itemText1}>Deposits</Text>
          <Icon name="chevron-forward-outline" size={24} color="#999393" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Withdrawals')}>
          <Text style={styles.itemText2}>Withdrawals</Text>
          <Icon name="chevron-forward-outline" size={24} color="#999393" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFF',
    paddingTop: 50,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 80,
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
    top: 20,
    height: 40,
    lineHeight: 40,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
  },
  backButton: {
    padding: 15,
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
  item: {
    height: 66,
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
  },
  itemText: {
    width: 86,
    height: 40,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    lineHeight: 40,
  },
  itemText1: {
    width: 67,
    height: 40,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    lineHeight: 40,
  },
  itemText2: {
    width: 94,
    height: 40,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
    lineHeight: 40,
  },
});

export default History;
