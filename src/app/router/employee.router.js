import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
    EmployeeListScreen,
    EmployeeCreateScreen,
    EmployeeEditScreen
} from '../screens';

const EmployeeRoutes = StackNavigator(
    {
        EmployeeList: {
            path: 'employee',
            screen: EmployeeListScreen
        },
        EmployeeCreate: {
            path: 'employee/create',
            screen: EmployeeCreateScreen
        },
        EmployeeEdit: {
            path: 'employee/:employeeId',
            screen: EmployeeEditScreen
        }
    },
    {
        initialRouteName: 'EmployeeList',
        headerMode: 'screen',
        cardStyle: {
            backgroundColor: '#FFF'
        },
        navigationOptions: {
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#448CF0',
                borderBottomColor: '#448CF0',
                elevation: 4,
                // Harcoded fix to deal with statusBar (temporal)
                height: Platform.OS === 'android' ? 79 : 64,
                paddingTop: Platform.OS === 'android' ? 23 : 20,
                // End hardcoded fix
                paddingHorizontal: 20,
                // marginBottom: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                alignSelf: 'center',
                color: '#FFF',
                fontSize: 20,
                textAlign: 'center'
            }
        }
    }
);

export default EmployeeRoutes;
