import React, { useEffect,useRef, useCallback  } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const First = ({ navigation }) => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      // Animation loop
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }, [scaleValue]);
  
    useFocusEffect(
      useCallback(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Welcome');
        }, 3000);
  
        return () => clearTimeout(timer);
      }, [navigation])
    );
  return (
    <View style={styles.container}>
       <Animated.Image
        source={require('../assets/images/chok11.png')}
        style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    color: '#007AFF',  // Blue color
  },
});

export default First;
