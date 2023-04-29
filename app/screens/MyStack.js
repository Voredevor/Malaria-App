import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import AboutMalaria from './AboutMalaria';
import DiagnosisOfMalaria from './DiagnosisOfMalaria';
import ProjectInfo from './ProjectInfo';
import CheckMalaria from './CheckMalaria';
import ResultScreen from './ResultScreen';

const Stack = createStackNavigator();

function MyStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Check Malaria' component={CheckMalaria} />
                <Stack.Screen name='About Malaria' component={AboutMalaria} />
                <Stack.Screen name='Diagnosis of Malaria' component={DiagnosisOfMalaria} />
                <Stack.Screen name='Project Info' component={ProjectInfo} />
                <Stack.Screen name='Result Screen' component={ResultScreen} />
            </Stack.Navigator>
        
        </NavigationContainer>
    );
}

export default MyStack;