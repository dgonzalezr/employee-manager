import * as _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { AppIconButton } from '../../components/common';
import { EmployeeItem } from '../../components/custom';
import { employeeListFetch } from './EmployeeList.actions';
import { colors } from '../../styling';

class EmployeeListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Employees',
            headerRight: (
                <AppIconButton
                    icon="md-person-add"
                    color="#fff"
                    onPress={
                        params.onIconPress ? params.onIconPress : () => null
                    }
                    size={20}
                />
            )
        };
    };

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        this.props.employeeListFetch();
    }

    componentDidMount() {
        this.props.navigation.setParams({
            onIconPress: this.navigateToAddEmploye
        });
    }

    navigateToAddEmploye = () => {
        const { navigation } = this.props;
        navigation.navigate('EmployeeCreate');
    };

    renderRow({ item }) {
        return (
            <EmployeeItem employee={item} navigation={this.props.navigation} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.employees}
                    renderItem={this.renderRow}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ employeeList }) => {
    const employees = _.map(employeeList.employees, (employee, uid) => ({
        ...employee,
        key: uid
    }));
    return { employees };
};

export default connect(mapStateToProps, { employeeListFetch })(
    EmployeeListScreen
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {},
    listRow: {
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    avatarContainer: {
        alignItems: 'center',
        backgroundColor: colors.placeHolderColor,
        borderRadius: 50,
        height: 52,
        justifyContent: 'center',
        width: 52
    }
});
