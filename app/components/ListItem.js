import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ text, style, title }) {
    return (
        <View style={[styles.container, style]}> 
            <View style={styles.bullet} />
            <View>
                {title && <AppText style={styles.boldText}>{title}</AppText>}
                <AppText style={styles.text}>{text}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bullet: {
        marginTop: 14,
        marginRight: 5,
        height:5, 
        width: 5, 
        backgroundColor: colors.black, 
        borderRadius: 20,

    },
    container: {
        flexDirection: 'row',
        padding: 10,
        
        
    }, 
    text: {
        textAlign: 'justify',
        lineHeight: 35,
        color: colors.black
    },
    boldText: {
       
        fontWeight: 'bold',
        textAlign: 'justify',
        lineHeight: 35,
        color: colors.black
    }
});
export default ListItem;