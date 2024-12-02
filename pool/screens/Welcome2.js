import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Circle } from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const screenWidth = Dimensions.get('window').width;

const Welcome2 = () => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(screenWidth)).current;

  const openMenu = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <TouchableOpacity onPress={openMenu}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Current Balance:</Text>
          <Text style={styles.balanceValue}>GHS 1000.00</Text>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>You're almost there</Text>
          <View style={styles.progressContent}>
            <TouchableOpacity style={styles.arrowButton}>
              <View style={styles.iconCircle}>
                <Icon name="chevron-back-outline" size={24} color="#4D80E4" />
              </View>
            </TouchableOpacity>
            <AnimatedCircularProgress
              size={100}
              width={8}
              fill={65}
              tintColor="#4D80E4"
              backgroundColor="#E0E4FF"
              rotation={0}
              lineCap='round'>
                {fill => <Text style={styles.progressText}>{`${fill.toFixed(0)}%`}</Text>}
            </AnimatedCircularProgress>
            <TouchableOpacity style={styles.arrowButton} onPress={openMenu}>
              <View style={styles.iconCircle}>
                <Icon name="chevron-forward-outline" size={24} color="#4D80E4" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.progressLabelContainer}>
            <View style={styles.blueDot} />
            <Text style={styles.progressLabel}>My girlfriend</Text>
          </View>
        </View>

        <View style={styles.deductionsContainer}>
          <Text style={styles.sectionTitle}>Your deductions</Text>
          <View style={styles.deductionItem}>
            <Text style={styles.deductionLabel}>My girlfriend</Text>
            <Text style={styles.deductionValue}>GHS 5</Text>
          </View>
          <View style={styles.deductionItem}>
            <Text style={styles.deductionLabel}>My new phone</Text>
            <Text style={styles.deductionValue}>GHS 5</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('YourGoals')}>
              <View style={styles.iconCircle}>
                <Icon name="bar-chart-outline" size={32} color="#4D80E4" />
              </View>
              <Text style={styles.actionLabel}>Set Goal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('LockSavings')}>
              <View style={styles.iconCircle}>
                <Icon name="lock-closed-outline" size={32} color="#4D80E4" />
              </View>
              <Text style={styles.actionLabel}>Lock Savings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionItem}>
              <View style={styles.iconCircle}>
                <Icon name="cash-outline" size={32} color="#4D80E4" />
              </View>
              <Text style={styles.actionLabel}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <View style={styles.iconCircle}>
                <Icon name="pause-outline" size={32} color="#4D80E4" />
              </View>
              <Text style={styles.actionLabel}>Pause Deductions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Slide-out Menu */}
      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
        {/* Close Button */}
        <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
          <Icon name="close-outline" size={30} color="#000000" />
        </TouchableOpacity>

        <View style={styles.menuHeader}>
          <View style={styles.menuAvatar}>
            <Text style={styles.menuAvatarText}>A</Text>
          </View>
          <Text style={styles.menuUserName}>Athanasius Kasser-Tee</Text>
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Settings</Text>
          <Icon name="chevron-forward-outline" size={24} color="#4D80E4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Dark mode</Text>
          <Icon name="chevron-forward-outline" size={24} color="#4D80E4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Referral Program</Text>
          <Icon name="chevron-forward-outline" size={24} color="#4D80E4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Help/FAQ</Text>
          <Icon name="chevron-forward-outline" size={24} color="#4D80E4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('History')}>
          <Text style={styles.menuItemText}>History</Text>
          <Icon name="chevron-forward-outline" size={24} color="#4D80E4" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4D80E4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  balanceContainer: {
    width: '100%',
    backgroundColor: '#E6E7EE',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#4D4D4D',
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  progressContainer: {
    width: '100%',
    backgroundColor: '#E6E7EE',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  progressContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrowButton: {
    padding: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9F9FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#4D80E4",
  },
  progressLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  blueDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4D80E4',
    marginRight: 10,
  },
  progressLabel: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  deductionsContainer: {
    width: '100%',
    backgroundColor: '#E6E7EE',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  deductionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  deductionLabel: {
    fontSize: 16,
    color: '#000000',
  },
  deductionValue: {
    fontSize: 16,
    color: '#000000',
  },
  actionsContainer: {
    width: '100%',
    backgroundColor: '#E6E7EE',
    borderRadius: 10,
    padding: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionItem: {
    alignItems: 'center',
    width: '45%',
  },
  actionLabel: {
    fontSize: 14,
    color: '#4D4D4D',
    textAlign: 'center',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: screenWidth * 0.8,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    top: 30,
  },
  menuText: {
    fontSize: 18,
    color: '#ffffff',
  },
  menuHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  menuAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4D80E4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuAvatarText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuUserName: {
    marginTop: 10,
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e7ee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Welcome2;