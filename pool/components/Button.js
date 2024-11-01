import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={{fontSize: 18}}>props.title</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1E90FF',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: '#fff',
    },
    secondaryButtonText: {
        color: '#1E90FF',
    },
    loginText: {
        color: '#fff',
        marginTop: 16,
    },
    loginLink: {
        color: '#1E90FF',
        fontWeight: 'bold',
    },
})

export default Button