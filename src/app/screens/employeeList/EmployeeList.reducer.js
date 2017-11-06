import ACTIONS from '../../config/app.actions';

const INIT_STATE = {
    employees: {}
};

const EmployeeListReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.EMPLOYE_LIST_FETCH:
            return action.payload;
        case ACTIONS.EMPLOYE_LIST_FETCH_SUCESS:
            return { ...state, employees: action.payload };
        default:
            return state;
    }
};

export default EmployeeListReducer;
