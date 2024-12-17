import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const goals = [
  { 
    title: 'My girlfriend', 
    description: 'Her birthday gift', 
    progress: 65,
    titleStyle: 'customTitle1',
    descriptionStyle: 'customDescription1'
  },
  { 
    title: 'My solo trip to Zanzibar', 
    description: 'My trip to Zanzibar for my vacation. Money for tickets and lodging.', 
    progress: 65,
    titleStyle: 'customTitle2',
    descriptionStyle: 'customDescription2'
  },
  { 
    title: 'Money for my start-up', 
    description: 'Savings for new projects and some basic funding for my start-up', 
    progress: 65,
    titleStyle: 'customTitle3',
    descriptionStyle: 'customDescription3'
  },
  { 
    title: 'Big 50', 
    description: 'Mummy’s 50th birthday gift', 
    progress: 65,
    titleStyle: 'customTitle4',
    descriptionStyle: 'customDescription4'
  },
];

const YourGoals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Goals</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.iconCircle}>
            <Icon name="chevron-back-outline" size={24} color="#647BFE" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {goals.map((goal, index) => (
          <TouchableOpacity 
            key={index} 
            style={
              styles.goalCard} 
            onPress={() => navigation.navigate('GoalDetail')}
          >
            <View style={styles.goalTextContainer}>
              <Text style={[styles.goalTitle, styles[goal.titleStyle]]}>{goal.title}</Text>
              <Text style={[styles.goalDescription, styles[goal.descriptionStyle]]}>{goal.description}</Text>
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
        <Icon name="add" size={24} color="#647BFE" />
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
    width: 189,
    height: 40,
    lineHeight: 40,
    top: 56,
    left: 20,
    fontSize: 36,
    fontWeight: 500,
    color: '#000000',
    flexDirection: 'row',
  },
  backButton: {
    padding: 10,
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
  scrollView: {
    flex: 1,
  },
  goalCard: {
    width: 350,
    backgroundColor: '#F2F4FF',
    borderRadius: 10,
    padding: 15,
    top: 50,
    marginTop: 10,
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
   // Custom styles for different titles and descriptions
   customTitle1: {
    width: 96,
    height: 40,
    color: '#000000',
    fontSize: 16,
    lineHeight: 40,
    top: -9,
    fontWeight: 400,
  },
  customDescription1: {
    width: 109,
    height: 40,
    top: 0,
    lineHeight: 40,
    color: '#968B8B',
    fontWeight: 400,
    fontSize: 14,
  },
  customTitle2: {
    width: 179,
    height: 40,
    lineHeight: 40,
    top: -4,
    left: 4,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  customDescription2: {
    width: 183,
    height: 60,
    left: 4,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    color: '#7F7E7E',
  },
  customTitle3: {
    width: 170,
    height: 40,
    top: -3,
    left: 4,
    fontWeight: 400,
    lineHeight: 40,
    fontSize:16,
    color: '#000000',
  },
  customDescription3: {
    width: 196,
    height: 60,
    left: 4,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    color: '#7F7E7E',
  },
  customTitle4: {
    width: 49,
    height: 40,
    top: -10,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 40,
    color: '#000000',
  },
  customDescription4: {
    width: 186,
    height: 40,
    top: -17,
    fontSize: 14,
    lineHeight: 40,
    fontWeight: 400,
    color: '#7F7E7E',
  },
  goalCardGirlfriend: {
    width: 350,
    height: 68,
    borderRadius: 12,
    borderWidth: 0.5,
    backgroundColor: '#F2F4FF',
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40'
  },
  goalCardZanzibar: {
    width: 350,
    height: 115,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    backgroundColor: '#F2F4FF',
    shadowColor: '#C6CFFF40',
  },
  goalCardStartup: {
    width: 350,
    height: 114,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    backgroundColor: '#F2F4FF',
    shadowColor: '#C6CFFF40',
  },
  goalCardBig50: {
    width: 350,
    height: 77,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    backgroundColor: '#F1F3FE',
    shadowColor: '#C6CFFF40',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#C6CFFF40',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default YourGoals;
