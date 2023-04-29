import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

export default function ResultScreen( { navigation, children }) {
    return (
        <ImageBackground blurRadius={3} style={ styles.background }
        source={ require('../assets/resultScreenBg.jpg')}>
        
          <View style={styles.resultContainer}>
        
        <Text style={ styles.result }>{children}</Text>
        </View>

        </ImageBackground>
        // <View style={ styles.buttonContainer}>
        //     <AppButton title='Go Home' onPress={() => navigation.navigate('Home')} />
        // </View>
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
    resultContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 200, 

    },  
    result: {
        fontSize: 20, 
        fontWeight: 'bold',
        paddingVertical: 20,
        textTransform: 'uppercase',
        lineHeight: 40,
        margin: 10,
        textAlign: 'center',
    }
})