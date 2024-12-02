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
          <Text style={styles.detailLabel}>Description</Text>
          <Text style={styles.detailValue}>{goal.description}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Amount</Text>
          <Text style={styles.detailValue}>500</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Timeframe</Text>
          <Text style={styles.detailValue}>6 months</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Your saving plan</Text>
          <Text style={styles.detailValue}>Pesewa Save Package</Text>
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
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
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deductionText: {
    fontSize: 16,
    color: '#666',
  },
  depositButton: {
    backgroundColor: '#4D80E4',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  depositButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default GoalDetail;
