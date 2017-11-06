import React, { Component } from 'react';
import { Keyboard, View, Platform, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Picker } from 'react-native-wheel-datepicker';
import { AppCard, AppInput } from '../../common';
import { employeeFormUpdate } from '../../../screens/employeeCreate/EmployeeCreate.actions';

import { colors } from '../../../styling';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.shiftDays = [
            { label: 'Monday', value: 1 },
            { label: 'Tuesday', value: 2 },
            { label: 'Wednesday', value: 3 },
            { label: 'Thursday', value: 4 },
            { label: 'Friday', value: 5 },
            { label: 'Saturday', value: 6 },
            { label: 'Sunday', value: 7 }
        ];
        this.getShiftDayByValue = this.getShiftDayByValue.bind(this);
    }

    componentWillMount() {
        this.shiftDayValue = this.props.shift
            ? this.shiftDays.find(day => day.label === this.props.shift).value
            : 0;
    }

    getShiftDayByValue(value) {
        return this.shiftDays.find(day => day.value === value).label;
    }

    render() {
        return (
            <AppCard>
                <View style={styles.formControl}>
                    <AppInput
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        keyboardType="email-address"
                        label={{ text: '', icon: 'ios-person-outline' }}
                        onValueChange={value =>
                            this.props.employeeFormUpdate({
                                prop: 'name',
                                value
                            })}
                        placeholder="Name"
                        value={this.props.name}
                    />
                </View>
                <View style={styles.formControl}>
                    <AppInput
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType="numeric"
                        label={{
                            text: '',
                            icon: 'ios-phone-portrait-outline'
                        }}
                        onValueChange={value =>
                            this.props.employeeFormUpdate({
                                prop: 'phone',
                                value
                            })}
                        placeholder="Phone"
                        value={this.props.phone}
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.pickerLabel}>Shift day</Text>
                    <Picker
                        pickerData={this.shiftDays}
                        selectedValue={this.shiftDayValue}
                        onValueChange={value => {
                            this.props.employeeFormUpdate({
                                prop: 'shift',
                                value: this.getShiftDayByValue(value)
                            });
                            this.shiftDayValue = value;
                        }}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        textColor={colors.whiteColor}
                        textSize={30}
                        itemSpace={32}
                    />
                </View>
            </AppCard>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeFormUpdate })(EmployeeForm);

const styles = StyleSheet.create({
    formControl: {
        marginBottom: 15
    },
    picker: {
        backgroundColor: 'transparent'
    },
    pickerItem: {
        color: colors.whiteColor
    },
    pickerLabel: {
        backgroundColor: 'transparent',
        color: colors.placeHolderColor,
        fontSize: 17
    }
});
