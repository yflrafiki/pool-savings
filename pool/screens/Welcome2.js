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
          <Text style={styles.sectionTitle1}>You're almost there</Text>
          <View style={styles.progressContent}>
            <TouchableOpacity style={styles.arrowButton}>
              <View style={styles.iconCircle1}>
                <Icon name="chevron-back-outline" size={24} color="#647BFE" />
              </View>
            </TouchableOpacity>
            <AnimatedCircularProgress
              size={100}
              width={8}
              height={116}
              fill={65}
              tintColor="#3D5AFE"
              backgroundColor="#E0E4FF"
              rotation={0}
              lineCap='round'>
                {fill => <Text style={styles.progressText}>{`${fill.toFixed(0)}%`}</Text>}
            </AnimatedCircularProgress>
            <TouchableOpacity style={styles.arrowButton} onPress={openMenu}>
              <View style={styles.iconCircle1}>
                <Icon name="chevron-forward-outline" size={24} color="#647BFE" />
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
          <View style={styles.deductionItem1}>
            <Text style={styles.deductionLabel1}>My new phone</Text>
            <Text style={styles.deductionValue}>GHS 5</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('YourGoals')}>
              <View style={styles.iconCircle}>
                <Icon name="bar-chart-outline" size={32} color="#647BFE" width="29" height="29.32" top="13" />
              </View>
              <Text style={styles.actionLabel}>Set Goal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('LockSavings')}>
              <View style={styles.iconCircle}>
                <Icon name="lock-closed-outline" size={32} color="#647BFE" width="22" height="28.95" top="14" />
              </View>
              <Text style={styles.actionLabel}>Lock Savings</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionItem}>
              <View style={styles.iconCircle}>
                <Icon name="cash-outline" size={32} color="#647BFE" width="33.86" height="28.5" top="14" />
              </View>
              <Text style={styles.actionLabel}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <View style={styles.iconCircle}>
                <Icon name="pause-outline" size={32} color="#647BFE" width="30" height="30" top="13" />
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
          <Icon name="chevron-forward-outline" size={24} color="#7F7E7E" width="27" height="27" top="12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText1}>Dark mode</Text>
          <Icon name="chevron-forward-outline" size={24} color="#7F7E7E" width="27" height="27" top="12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText2}>Referral Program</Text>
          <Icon name="chevron-forward-outline" size={24} color="#7F7E7E" width="27" height="27" top="12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText3}>Help/FAQ</Text>
          <Icon name="chevron-forward-outline" size={24} color="#7F7E7E" width="27" height="27" top="12" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('History')}>
          <Text style={styles.menuItemText4}>History</Text>
          <Icon name="chevron-forward-outline" size={24} color="#7F7E7E" width="27" height="27" top="12" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFF',
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
    width: 170,
    height: 40,
    fontSize: 36,
    top: 30,
    fontWeight: 500,
    color: '#000000',
  },
  avatar: {
    width: 36,
    height: 40,
    top: 35,
    borderRadius: 20,
    backgroundColor: '#647BFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    width: 17,
    height: 40,
    lineHeight: 40,
    top: -1,
    left: 1,
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 24,
  },
  balanceContainer: {
    width: 350,
    height: 138,
    top: 31,
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#C6CFFF',
  },
  balanceLabel: {
    width: 126,
    height: 40,
    right: 90,
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 400,
    color: '#000000',
  },
  balanceValue: {
    width: 199,
    height: 40,
    top: 25,
    flexDirection: 'row',
    fontSize: 32,
    fontWeight: 400,
    color: '#000000',
  },
  progressContainer: {
    width: 350,
    height: 237,
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#C6CFFF40',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
  },
  sectionTitle1: {
    width: 146,
    height: 40,
    lineHeight: 40,
    right: 50,
    fontSize: 16,
    fontWeight: 400,
    color: '#000000',
    textAlign: 'center',
  },
  progressContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  arrowButton: {
    width: 100,
    height: 33,
    paddingLeft: 16,
  },
  iconCircle1: {
    width: 33,
    height: 33,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF',
    left: 20,
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
    width: 123,
    height: 40,
  },
  blueDot: {
    width: 7,
    height: 7,
    top: 16,
    left: 2,
    borderRadius: 4,
    backgroundColor: '#647BFE',
    marginRight: 10,
  },
  progressLabel: {
    width: 84,
    height: 40,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 40,
    color: '#000000',
    marginTop: 20,
  },
  deductionsContainer: {
    width: 350,
    height: 138,
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    borderColor: '#C6CFFF',
    borderWidth: 0.5,
    shadowColor: '#C6CFFF40',
  },
  sectionTitle: {
    width: 123,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    fontWeight: 400,
    color: '#000000',
    textAlign: 'center',
  },
  deductionItem: {
    width: 271,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  deductionItem1: {
    width: 270,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  deductionLabel: {
    width: 84,
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    fontWeight: 400,
    color: '#000000',
  },
  deductionLabel1: {
    width: 98,
    height: 40,
    fontWeight: 400,
    lineHeight: 40,
    fontSize: 14,
    color: '#000000',
  },
  deductionValue: {
    width: 43,
    height: 40,
    lineHeight: 40,
    fontWeight: 400,
    fontSize: 14,
    color: '#7F7E7E',
  },
  actionsContainer: {
    width: 350,
    height: 300,
    top: 5,
    backgroundColor: '#F2F4FF',
    borderRadius: 12,
    paddingBottom: 50,
    borderColor: '#C6CFFF',
    shadowColor: '#C6CFFF40',
    justifyContent: 'space-around',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#F9F9FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#647BFE',
    shadowColor: '#C6CFFF40',
  },
  actionRow: {
    width: 249,
    height: 179,
    top: 20,
    left: 51,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -10,
  },
  actionItem: {
    alignItems: 'center',
    width: 56,
    height: 56,
    left: 3,
    borderWidth: 0.5,
    borderColor: '#647BFE',
  },
  actionLabel: {
  width: 110,
  height: 40,
  fontSize: 12,
  color: '#000000',
  textAlign: 'center',
  fontWeight: 600,
  marginTop: 11,
  flexDirection: 'row',
  justifyContent: 'space-between',
  },
  menuContainer: {
    width: 287,
    height: 960,
    position: 'absolute',
    top: 0,
    right: -17,
    bottom: 0,
    width: screenWidth * 0.8,
    backgroundColor: '#F9FAFF',
    padding: 20,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
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
    width: 173,
    height: 106,
    top: 108,
    left: 57,
    alignItems: 'center',
    marginBottom: 20,
  },
  menuAvatar: {
    width: 66,
    height: 66,
    left: -15,
    borderRadius: 30,
    backgroundColor: '#647BFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuAvatarText: {
    width: 26,
    height: 40,
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 500,
    lineHeight: 40,
  },
  menuUserName: {
    width: 216,
    height: 40,
    lineHeight: 40,
    left: -22,
    marginTop: 10,
    fontSize: 20,
    color: '#000000',
    fontWeight: 400,
  },
  menuItem: {
    width: 273,
    height: 55,
    left: 1,
    top: 252,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e7ee',
  },
  menuItemText: {
    width: 63,
    height: 40,
    lineHeight: 40,
    top:5,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  menuItemText1: {
    width: 83,
    height: 40,
    top: 5,
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  menuItemText2: {
    width: 128,
    height: 40,
    top: 5,
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  menuItemText3: {
    width: 71,
    height: 40,
    top: 5,
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
  menuItemText4: {
    width: 60,
    height: 40,
    top: 5,
    lineHeight: 40,
    fontSize: 16,
    color: '#000000',
    fontWeight: 400,
  },
});

export default Welcome2;