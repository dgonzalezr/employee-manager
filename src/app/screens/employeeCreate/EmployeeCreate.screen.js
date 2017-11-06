import React, { Component } from 'react';
import {
    Keyboard,
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { AppButton } from '../../components/common';
import { EmployeeForm } from '../../components/custom';
import {
    employeeFormUpdate,
    employeeFormReset,
    employeeCreateSubmit
} from './EmployeeCreate.actions';

class EmployeeCreateScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Create Employee'
    });

    constructor(props) {
        super(props);

        this.onSavePress = this.onSavePress.bind(this);
    }

    componentWillMount() {
        this.props.employeeFormReset();
    }

    onSavePress() {
        const { name, phone, shift, navigation } = this.props;
        this.props
            .employeeCreateSubmit({ name, phone, shift: shift || 'Monday' })
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

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <EmployeeForm {...this.props} />
                    <View style={styles.formControl}>
                        <AppButton
                            accessibilityLabel="Save employee data"
                            disabled={this.props.processing}
                            icon="ios-checkmark-circle-outline"
                            loading={this.props.processing}
                            onPress={this.onSavePress}
                            title="Save"
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = ({ employeeForm, navigationState }) => {
    const { name, phone, shift, error, processing } = employeeForm;
    return { name, phone, shift, error, processing };
};

export default connect(mapStateToProps, {
    employeeFormUpdate,
    employeeFormReset,
    employeeCreateSubmit
})(EmployeeCreateScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20
    },
    formControl: {
        marginBottom: 15
    }
});
