import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const goals = [
  { title: 'My girlfriend', description: 'Her birthday gift', progress: 65 },
  { title: 'My solo trip to Zanzibar', description: 'Money for tickets and lodging', progress: 65 },
  { title: 'Money for my start-up', description: 'Savings for new projects and some basic funding for my start-up', progress: 65 },
  { title: 'Big 50', description: 'Mummy’s 50th birthday gift', progress: 65 },
];

const YourGoals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Goals</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.iconCircle}>
            <Icon name="chevron-back-outline" size={24} color="#4D80E4" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {goals.map((goal, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.goalCard} 
            onPress={() => navigation.navigate('GoalDetail', { goal })}
          >
            <View style={styles.goalTextContainer}>
              <Text style={styles.goalTitle}>{goal.title}</Text>
              <Text style={styles.goalDescription}>{goal.description}</Text>
            </View>
            <AnimatedCircularProgress
              size={50}
              width={5}
              fill={goal.progress}
              tintColor="#4D80E4"
              backgroundColor="#E0E4FF"
              rotation={0}
              lineCap="round"
            >
              {fill => <Text style={styles.progressText}>{`${fill.toFixed(0)}%`}</Text>}
            </AnimatedCircularProgress>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('SetGoal')}>
        <Icon name="add" size={24} color="#4D80E4" />
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
  scrollView: {
    flex: 1,
  },
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  goalDescription: {
    fontSize: 14,
    color: '#666',
    flexWrap: 'wrap',
  },
  progressText: {
    fontSize: 12,
    color: '#4D80E4',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default YourGoals;
