import { combineReducers } from 'redux';
import NavReducer from '../router/app.router.reducer';
import AuthReducer from '../screens/login/Login.reducer';
import EmployeeListReducer from '../screens/employeeList/EmployeeList.reducer';
import EmployeeFormReducer from '../screens/employeeCreate/EmployeeCreate.reducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    navigationState: NavReducer,
    employeeList: EmployeeListReducer,
    employeeForm: EmployeeFormReducer
});

export default rootReducer;
