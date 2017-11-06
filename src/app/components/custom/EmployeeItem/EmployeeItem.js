import React, { Component } from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../styling';

class EmployeeItem extends Component {
    constructor(props) {
        super(props);

        this.onRowPress = this.onRowPress.bind(this);
    }

    onRowPress() {
        const { employee, navigation } = this.props;
        navigation.navigate('EmployeeEdit', { employee: employee });
    }

    render() {
        const { employee } = this.props;
        return (
            <TouchableOpacity onPress={this.onRowPress} activeOpacity={0.8}>
                <View style={styles.container}>
                    <Icon name="ios-contact" style={styles.avatar} />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.employeeName}>{employee.name}</Text>
                        <View style={styles.phoneContainer}>
                            <Icon
                                name="ios-phone-portrait"
                                style={styles.phoneIcon}
                            />
                            <Text style={styles.phoneNumber}>
                                {employee.phone}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default EmployeeItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomColor: 'rgba(51, 35, 100, 0.3)',
        borderBottomWidth: 0.5,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    avatar: {
        color: '#448CF0',
        fontSize: 70,
        marginTop: Platform.OS === 'ios' ? 5 : 0,
        marginRight: 20
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    employeeName: {
        color: '#565555',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginBottom: 5
    },
    phoneContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    phoneIcon: {
        color: '#565555',
        fontSize: 14
    },
    phoneNumber: {
        color: '#565555',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        marginLeft: 8
    }
});
