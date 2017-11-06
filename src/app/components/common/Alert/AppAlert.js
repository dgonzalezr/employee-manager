import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../styling';

const AppAlert = ({ alert, type }) => {
    const containerStyle = [styles.container];
    const textStyle = [styles.text];

    switch (type) {
        case 'error':
            containerStyle.push({ backgroundColor: colors.red.dark });
            break;
        case 'warning':
            containerStyle.push({ backgroundColor: colors.yellow });
            break;
        case 'info':
            containerStyle.push({ backgroundColor: colors.blue });
            break;
        default:
            containerStyle.push({ backgroundColor: 'transparent' });
    }

    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{alert}</Text>
        </View>
    );
};

export { AppAlert };

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    text: {
        alignSelf: 'center',
        color: colors.whiteColor,
        textAlign: 'center'
    }
});
