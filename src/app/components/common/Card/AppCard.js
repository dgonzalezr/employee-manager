import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppCard = props => {
    const containerStyle = [styles.container];
    return (
        <LinearGradient style={containerStyle} colors={['#448CF0', '#6D2DD8']}>
            {props.children}
        </LinearGradient>
    );
};

export { AppCard };

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        elevation: 2,
        marginBottom: 15,
        paddingHorizontal: 20,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    }
});
