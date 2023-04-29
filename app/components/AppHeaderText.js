import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppHeaderText({children, style}) {
    return (
        <Text style={[styles.text, style]}>
            { children }
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.black,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Al Nile',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 27,
        textTransform: 'capitalize',
        paddingVertical: 10, 
    }
});

export default AppHeaderText;