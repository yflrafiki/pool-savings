import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const GoalDetail = ({  navigation }) => {


  return (
    <View style={styles.container}>
      {/* Back Button */}
       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <View style={styles.iconCircle}>
                <Icon name="arrow-back-outline" size={24} color="#647BFE" />
                </View>
              </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.header}>New Laptop</Text>

      {/* Goal Details */}
      <View style={styles.detailCard}>
      <View style={[styles.row, styles.entrySeparator]}>
          <Text style={styles.label}>Goal</Text>
          <Text style={styles.value}>New Laptop</Text>
        </View>

        <View style={[styles.row1, styles.entrySeparator]}>
          <Text style={styles.label1}>Description</Text>
          <Text style={styles.value1}>My new laptop...</Text>
        </View>

        <View style={[styles.row2, styles.entrySeparator]}>
          <Text style={styles.label2}>Amount</Text>
          <Text style={styles.value2}>500</Text>
        </View>

        <View style={[styles.row3, styles.entrySeparator]}>
          <Text style={styles.label3}>Timeframe</Text>
          <Text style={styles.value3}>6 months</Text>
        </View>

        <View style={styles.row4}>
          <Text style={styles.label4}>Your Saving Plan</Text>
          <Text style={styles.value4}>Pesewa Save Package</Text>
        </View>
      </View>

      {/* Progress Section */}
      <View style={styles.progressSection}>
        <Text style={styles.progressTitle}>Your Progress</Text>
          <View style={styles.progressContent}>
             <AnimatedCircularProgress
                          size={150}
                          width={15}
                          height={86}
                          fill={100}
                          tintColor="#3D5AFE"
                          backgroundColor="#E0E4FF"
                          rotation={0}
                          lineCap='round'>
                            {fill => <Text style={styles.progressText}>{`${fill.toFixed(0)}%`}</Text>}
                        </AnimatedCircularProgress>
          </View>
          <View style={styles.intext}>
            <Text style={styles.inProgress}>In progress</Text>

          </View>
      </View>

      {/* Fee Deductions */}
      <View style={styles.deductionsCard}>
        <Text style={[styles.label5, styles.entrySeparator]}>Deductions</Text>
        <Text style={[styles.value6, styles.entrySeparator]}>₵5.00 fee deduction                         ✅</Text>
        <Text style={[styles.value7, styles.entrySeparator]}>₵5.00 fee deduction                         ❌</Text>
        <Text style={[styles.value8,styles.entrySeparator]}>₵5.00 fee deduction                          ✅</Text>
      </View>

      {/* Deposit Funds Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deposit Funds</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF', 
    padding: 20 
  },
  backButton: {
    padding: 15,
    right: 20,
    zIndex: 1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    top: 56,
    left: 334,
    zIndex: 1,
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  detailCard: {
    width: 350,
    height: 257,
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
  },
  row: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Push label and value to opposite ends
    marginVertical: 5,
    top: -25,
  },
  row1: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Push label and value to opposite ends
    marginVertical: 5,
    top: -35,
  },
  row2: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Push label and value to opposite ends
    marginVertical: 5,
    top: -45,
  },
  row3: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Push label and value to opposite ends
    marginVertical: 5,
    top: -55,
  },
  row4: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Push label and value to opposite ends
    marginVertical: 5,
    top: -60,
  },
  label: { 
    width: 31,
    height: 40,
    lineHeight: 40,
    fontSize: 14, 
    color: '#7F7E7E', 
    marginTop: 10,
    fontWeight: 500,
  },
  label1: { 
    height: 40,
    lineHeight: 40,
    fontSize: 14, 
    color: '#7F7E7E', 
    marginTop: 10,
    fontWeight: 500,
  },
  label2: { 
    height: 40,
    lineHeight: 40,
    fontSize: 14, 
    color: '#7F7E7E', 
    marginTop: 10,
    fontWeight: 500,
  },
  label3: { 
    height: 40,
    lineHeight: 40,
    fontSize: 14, 
    color: '#7F7E7E', 
    marginTop: 10,
    fontWeight: 500,
  },
  label4: { 
    height: 40,
    lineHeight: 40,
    fontSize: 14, 
    color: '#7F7E7E', 
    marginTop: 10,
    fontWeight: 500,
  },
  value: { 
    width: 92,
    lineHeight: 40,
    height: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400, 
    top: 10,
  },
  value1: { 
    width: 125,
    height: 40,
    lineHeight: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400, 
    top: 10,
  },
  value2: { 
    width: 30,
    height: 40,
    lineHeight: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400, 
    top: 10,
  },
  value3: { 
    width: 72,
    height: 40,
    lineHeight: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400, 
    top: 10,
  },
  value4: { 
    width: 170,
    height: 40,
    lineHeight: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400,
    top: 10, 
  },
  progressSection: { 
    width: 350,
    height: 289,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
    top: -14,
  },
  progressContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 25,
  },
  progressTitle: { 
    height: 40,
    lineHeight: 40,
    color: '#000000',
    fontSize: 16, 
    fontWeight: 400,
    textAlign: 'center',
 },
  progressText: {
    width: 72.66,
    height: 34.1,
    lineHeight: 22.41,
    fontSize: 18.45, 
    color: '#3D5AFE', 
    fontWeight: 500,
    textAlign: 'center',
 },
  intext: { 
    width: 73,
    height: 23,
    marginTop: 10, 
    borderColor: '#C8BB2E', 
    fontWeight: '600', 
    borderRadius: 12,
    textAlign: 'center',
    justifyContent: 'center',
    top: 40,
    borderWidth: 1,
    left: 120,
    padding: 10,
  },
  inProgress: { 
    width: 53,
    height: 40,
    lineHeight: 40,
    color: '#C8BB2E', 
    fontWeight: 400, 
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 10,
  },
  deductionsCard: {
    width: 350,
    height: 190,
    backgroundColor: '#F1F3FE',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
    top: -25,
  },
  label5: { 
    height: 40,
    lineHeight: 40,
    fontSize: 14, 
    color: '#8F8686', 
    marginTop: 10,
    fontWeight: 500,
    top: -25,
  },
  value6: { 
    height: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400, 
    top: -20,
  },
  value7: { 
    height: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400, 
    top: -25,
  },
  value8: { 
    height: 40,
    fontSize: 16, 
    color: '#000000',
    fontWeight: 400, 
    top: -19,
  },
  entrySeparator: {
    width: 318,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E6DEDE',
  },
  button: {
    width: 330,
    height: 50,
    backgroundColor: '#647BFE',
    paddingTop: 5,
    paddingRight: 149,
    paddingBottom: 5,
    paddingLeft: 149,
    borderRadius: 30,
    alignItems: 'center',
    top: -34,
  },
  buttonText: { 
    width: 113,
    height: 40,
    lineHeight: 40,
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '600', 
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default GoalDetail;
