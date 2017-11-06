import React, { Component } from 'react';
import { Platform, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
// Application Router
import AppRouter from './router/app.router';

class AppState extends Component {
    componentWillMount() {
        // --> Handling the Hardware Back Button in Android
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        }
        // <-- Handling the Hardware Back Button in Android
    }

    componentWillUnmount() {
        // --> Handling the Hardware Back Button in Android
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                this.onBackPress
            );
        }
        // <-- Handling the Hardware Back Button in Android
    }

    onBackPress = () => {
        const { dispatch, navigationState } = this.props;
        console.log(navigationState);
        if (navigationState.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { dispatch, navigationState } = this.props;

        return (
            <AppRouter
                navigation={addNavigationHelpers({
                    dispatch,
                    state: navigationState
                })}
            />
        );
    }
}

const mapStateToProps = ({ navigationState }) => ({ navigationState });

export default connect(mapStateToProps)(AppState);
