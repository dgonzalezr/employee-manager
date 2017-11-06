import * as _ from 'lodash';
import React, { Component } from 'react';
import {
    Keyboard,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Communications from 'react-native-communications';
import { AppButton, AppDialog } from '../../components/common';
import { EmployeeForm } from '../../components/custom';

import {
    employeeFormUpdate,
    employeeEditSubmit,
    employeeFireSubmit
} from '../employeeCreate/EmployeeCreate.actions';

class EmployeeEditScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Edit Employee'
    });

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.onUpdatePress = this.onUpdatePress.bind(this);
        this.onTextMessagePress = this.onTextMessagePress.bind(this);
        this.onDialogCancel = this.onDialogCancel.bind(this);
        this.onDialogConfirm = this.onDialogConfirm.bind(this);
    }

    componentWillMount() {
        const { navigation, employeeFormUpdate } = this.props;
        _.each(navigation.state.params.employee, (value, prop) => {
            employeeFormUpdate({ prop, value });
        });
    }

    onUpdatePress() {
        const { name, phone, shift, uid, navigation } = this.props;
        this.props
            .employeeEditSubmit({ name, phone, shift, uid })
            .then(() => {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: 'EmployeeList'
                        })
                    ]
                });
                navigation.dispatch(resetAction);
            })
            .catch(error => console.log(error));
    }

    onTextMessagePress() {
        const { name, phone, shift } = this.props;

        Communications.textWithoutEncoding(
            `${phone}`,
            `Hi ${name}, your upcoming shift is on ${shift}`
        );
    }

    onDialogCancel() {
        this.setState({
            showModal: false
        });
    }

    onDialogConfirm() {
        const { uid, employeeFireSubmit, navigation } = this.props;
        employeeFireSubmit({ uid })
            .then(() => {
                this.setState({
                    showModal: false
                });
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: 'EmployeeList'
                        })
                    ]
                });
                navigation.dispatch(resetAction);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <EmployeeForm />
                        <View style={styles.formControl}>
                            <AppButton
                                accessibilityLabel="Update employee data"
                                disabled={this.props.processing}
                                icon="ios-checkmark-circle-outline"
                                loading={this.props.processing}
                                onPress={this.onUpdatePress}
                                title="Update"
                            />
                        </View>
                        <View style={styles.formControl}>
                            <AppButton
                                accessibilityLabel={`Send a message to ${this
                                    .props.name}`}
                                disabled={this.props.processing}
                                icon="ios-chatbubbles-outline"
                                onPress={this.onTextMessagePress}
                                title="Text Schedule"
                            />
                        </View>
                        <View style={styles.formControl}>
                            <AppButton
                                accessibilityLabel="Fire employee"
                                disabled={this.props.processing}
                                icon="ios-thumbs-down-outline"
                                onPress={() =>
                                    this.setState({
                                        showModal: !this.state.showModal
                                    })}
                                title="Fire Employee"
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <AppDialog
                    visible={this.state.showModal}
                    onCancel={this.onDialogCancel}
                    onConfirm={this.onDialogConfirm}>
                    <Text style={styles.dialaogText}>
                        Please confirm, are you sure you want to fire this
                        employee?
                    </Text>
                </AppDialog>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift, key, error, processing } = employeeForm;
    return { name, phone, shift, uid: key, error, processing };
};

export default connect(mapStateToProps, {
    employeeFormUpdate,
    employeeEditSubmit,
    employeeFireSubmit
})(EmployeeEditScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20
    },
    formControl: {
        marginBottom: 15
    },
    dialaogText: {
        color: '#565555',
        fontSize: 18,
        fontFamily: 'Roboto-Regular'
    }
});
