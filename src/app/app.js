import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
// Firebase
import firebase from 'firebase';
// App Store and State
import AppStore from './config/app.store';
import AppState from './app.state';

class AppIndex extends Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = ['Setting a timer'];
    }

    componentWillMount() {
        const config = {
            // Firebase onfigurations
            apiKey: '',
            authDomain: '',
            databaseURL: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: ''
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render() {
        return (
            <Provider store={AppStore}>
                <View style={styles.container}>
                    <StatusBar
                        animated
                        backgroundColor="transparent"
                        barStyle="light-content"
                        translucent
                    />
                    <AppState />
                </View>
            </Provider>
        );
    }
}

export default AppIndex;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
