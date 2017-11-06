import { StackNavigator } from 'react-navigation';
import EmployeeRoutes from './employee.router';
// Screens
import { LoginScreen } from '../screens';

const AppRouter = StackNavigator(
    {
        Login: {
            navigationOptions: {
                header: null
            },
            path: 'login',
            screen: LoginScreen
        },
        Employee: { screen: EmployeeRoutes }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);

export default AppRouter;
