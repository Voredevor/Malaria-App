import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function HomeScreen( { navigation }) {
    return (
        
            <ImageBackground blurRadius={5} style={ styles.background }
            source={ require('../assets/background.jpg')}>
            
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={ require('../assets/logoMpm.png')} />
            <Text style={ styles.tagline }> Malaria Predictive Model</Text>
            </View>

            <View style={ styles.buttonContainer}>
                <AppButton title='Check Malaria' onPress={() => navigation.navigate('Check Malaria')}/>
                <AppButton title='About Malaria' onPress={() => navigation.navigate('About Malaria')}/>
                <AppButton title='Diagnosis Of Malaria' onPress={() => navigation.navigate('Diagnosis of Malaria')}/>
                <AppButton title='Project Info' color='secondary' onPress={() => navigation.navigate('Project Info')}/>
            </View>
            </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',       
    }, 
    buttonContainer:{
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100, 
        height: 100, 
        
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70, 

    },  
    tagline: {
        fontSize: 30, 
        fontWeight: 'bold',
        paddingVertical: 20,
        textTransform: 'capitalize',
        color: colors.black
    }
})