import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = ({}) => (
    <View style={styles.container}>
        <Text>Im AppHeader</Text>
    </View>
);

export { AppHeader };

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
