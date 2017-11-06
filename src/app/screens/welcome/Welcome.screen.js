import React, { Component } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../../assets/images/logo.png';

import { AppInput } from '../../components/common';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);

        this.state = {
            email: ''
        };
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 20000,
            easing: Easing.linear
        }).start(() => this.spin());
    }

    render() {
        const {
            codeStyle,
            containerStyle,
            descriptionStyle,
            descriptionViewStyle,
            logoStyle,
            titleStyle,
            welcomeViewStyle
        } = styles;

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        logoStyle.transform = [{ rotate: spin }];

        return (
            <View style={containerStyle}>
                <LinearGradient
                    style={{ flex: 3 }}
                    colors={['#5121A6', '#673ab7', '#753F96']}>
                    <View style={welcomeViewStyle}>
                        <Animated.Image source={logo} style={logoStyle} />
                        <Text style={titleStyle}>
                            Welcome{'\n'}to{'\n'}React Native
                        </Text>
                    </View>
                </LinearGradient>
                <View style={descriptionViewStyle}>
                    <Text style={descriptionStyle}>
                        To get started, edit
                        <Text style={codeStyle}>
                            {'\n'}src/app/screens/welcome/AppWelcome.js{'\n'}
                        </Text>
                        and save to reload.
                    </Text>
                </View>
            </View>
        );
    }
}

export default WelcomeScreen;

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    welcomeViewStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    logoStyle: {
        height: 98,
        resizeMode: 'contain'
    },
    titleStyle: {
        backgroundColor: 'transparent',
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center'
    },
    descriptionViewStyle: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    descriptionStyle: {
        color: '#212529',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        textAlign: 'center'
    },
    codeStyle: {
        color: '#bd4147'
    }
};
