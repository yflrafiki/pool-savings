import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const GoalDetail = ({ route, navigation }) => {
  const { goal } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{goal.title}</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.iconCircle}>
            <Icon name="chevron-back-outline" size={24} color="#4D80E4" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.goalDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Goal</Text>
          <Text style={styles.detailValue}>{goal.title}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel1}>Description</Text>
          <Text style={styles.detailValue1}>{goal.description}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel2}>Amount</Text>
          <Text style={styles.detailValue2}>500</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel3}>Timeframe</Text>
          <Text style={styles.detailValue3}>6 months</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel4}>Your saving plan</Text>
          <Text style={styles.detailValue4}>Pesewa Save Package</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Your Progress</Text>
        <AnimatedCircularProgress
          size={200}
          width={10}
          fill={100}
          tintColor="#4D80E4"
          backgroundColor="#E0E4FF"
          rotation={0}
          lineCap="round"
        >
          {fill => <Text style={styles.progressText}>{`${fill.toFixed(0)}%`}</Text>}
        </AnimatedCircularProgress>
        <Text style={styles.statusLabel}>In progress</Text>
      </View>
      <View style={styles.deductionsContainer}>
        <Text style={styles.deductionsLabel}>Deductions</Text>
        <View style={styles.deductionRow}>
          <Text style={styles.deductionText}>₵5.00 fee deduction</Text>
          <Icon name="checkmark-circle-outline" size={24} color="#4D80E4" />
        </View>
        <View style={styles.deductionRow}>
          <Text style={styles.deductionText}>₵5.00 fee deduction</Text>
          <Icon name="close-circle-outline" size={24} color="red" />
        </View>
        <View style={styles.deductionRow}>
          <Text style={styles.deductionText}>₵5.00 fee deduction</Text>
          <Icon name="checkmark-circle-outline" size={24} color="#4D80E4" />
        </View>
      </View>
      <TouchableOpacity style={styles.depositButton} onPress={() => { /* Handle deposit action */ }}>
        <Text style={styles.depositButtonText}>Deposit Funds</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  backButton: {
    padding: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  goalDetails: {
    width: 350,
    height: 257,
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    padding: 15,
    marginBottom: -30,
    shadowColor: '#C6CFFF40',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  detailRow: {
    width: 318,
    height: 50,
    top: 6,
    left: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -10,
  },
  detailLabel: {
    width: 31,
    height: 40,
    top: 2,
    fontWeight: 500,
    lineHeight: 40,
    fontSize: 14,
    color: '#7F7E7E',
  },
  detailLabel1: {
    width: 77,
    height: 40,
    top: 2,
    fontWeight: 500,
    lineHeight: 40,
    fontSize: 14,
    color: '#7F7E7E',
  },
  detailLabel2: {
    width: 53,
    height: 40,
    top: 2,
    fontWeight: 500,
    lineHeight: 40,
    fontSize: 13.2,
    color: '#7F7E7E',
  },
  detailLabel3: {
    width: 73,
    height: 40,
    top: 2,
    fontWeight: 500,
    lineHeight: 40,
    fontSize: 14,
    color: '#7F7E7E',
  },
  detailLabel4: {
    width: 110,
    height: 40,
    top: 2,
    fontWeight: 500,
    lineHeight: 40,
    fontSize: 13.2,
    color: '#7F7E7E',
  },
  detailValue: {
    width: 92,
    height: 40,
    lineHeight: 40,
    right: 20,
    fontSize: 16,
    fontWeight: 400,
    color: '#000000',
  },
  detailValue1: {
    width: 125,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    right: 50,
    fontWeight: 400,
    color: '#000000',
  },
  detailValue2: {
    width: 30,
    height: 40,
    top: 2,
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 400,
    color: '#000000',
  },
  detailValue3: {
    width: 72,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 400,
    color: '#000000',
  },
  detailValue4: {
    width: 170,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 400,
    color: '#000000',
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  progressLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D80E4',
  },
  statusLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  deductionsContainer: {
    width: 350,
    height: 273,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    padding: 15,
    marginBottom: 20,
    shadowColor: '#C6CFFF40',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  deductionsLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  deductionRow: {
    width: 318,
    height: 40,
    left: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deductionText: {
    width: 154,
    height: 40,
    fontWeight: 400,
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
  },
  depositButton: {
    width: 330,
    height: 50,
    top: 10,
    backgroundColor: '#647BFE',
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    borderRadius: 30,
    alignItems: 'center',
  },
  depositButtonText: {
    width: 111,
    height: 40,
    lineHeight: 40,
    fontSize: 15.6,
    color: '#FFFFFF',
    fontWeight: 600,
  },
});

export default GoalDetail;
