import React, { Component } from 'react';
import {
    Keyboard,
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { AppAlert, AppButton, AppInput } from '../../components/common';
import {
    emailChanged,
    passwordChanged,
    loginUser,
    registerUser
} from './Login.actions';

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLoginPressButton = this.onLoginPressButton.bind(this);
    }

    onEmailChange(email) {
        this.props.emailChanged(email);
    }

    onPasswordChange(password) {
        this.props.passwordChanged(password);
    }

    onError() {
        const { error } = this.props;
        if (error) {
            return <AppAlert alert={error.message} type="error" />;
        }
        return;
    }

    onLoginPressButton() {
        const dismissKeyboard = require('dismissKeyboard');
        dismissKeyboard(); //dismisses it

        const {
            email,
            password,
            loginUser,
            registerUser,
            navigation
        } = this.props;

        const goToEmployeeList = NavigationActions.navigate({
            routeName: 'EmployeeList'
        });

        loginUser({ email, password })
            .then(() => {
                // navigation.dispatch(goToEmployeeList);
                navigation.navigate('Employee', {}, goToEmployeeList);
            })
            .catch(() => {
                registerUser({ email, password })
                    .then(() => {
                        // navigation.dispatch(goToEmployeeList);
                        navigation.navigate('Employee', {}, goToEmployeeList);
                    })
                    .catch(() => {});
            });
    }

    render() {
        const formStyle = [styles.form];
        const formControlStyle = [styles.formControl];
        const gradientStyle = [styles.gradient];

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient
                    style={gradientStyle}
                    colors={['#448CF0', '#6D2DD8']}>
                    <View style={formStyle}>
                        <View style={formControlStyle}>
                            <AppInput
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                keyboardType="email-address"
                                label={{ text: '', icon: 'ios-mail-outline' }}
                                onValueChange={this.onEmailChange}
                                placeholder="email@domain.com"
                                value={this.props.email}
                            />
                        </View>
                        <View style={formControlStyle}>
                            <AppInput
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                label={{ text: '', icon: 'ios-key-outline' }}
                                onValueChange={this.onPasswordChange}
                                placeholder="password"
                                secureTextEntry
                                value={this.props.password}
                            />
                        </View>
                        <View style={formControlStyle}>
                            <AppButton
                                accessibilityLabel="Login to your account"
                                disabled={this.props.processing}
                                icon="ios-unlock"
                                loading={this.props.processing}
                                onPress={this.onLoginPressButton}
                                title="LOGIN"
                                type="inverse"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 100, paddingHorizontal: 40 }}>
                        {this.onError()}
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, user, error, processing } = auth;
    return { email, password, user, error, processing };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser,
    registerUser
})(LoginScreen);

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        flexDirection: 'column'
    },
    form: {
        marginTop: 200,
        paddingHorizontal: 40
    },
    formControl: {
        marginBottom: 15
    }
});
