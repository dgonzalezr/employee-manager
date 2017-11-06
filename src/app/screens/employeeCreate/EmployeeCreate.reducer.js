import ACTIONS from '../../config/app.actions';

const INIT_STATE = {
    name: '',
    phone: '',
    shift: '',
    processing: false,
    error: ''
};

const EmployeeFormReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.EMPLOYEE_FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case ACTIONS.EMPLOYEE_CREATE_PENDING:
        case ACTIONS.EMPLOYEE_EDIT_PENDING:
            return { ...state, error: '', processing: true };
        case ACTIONS.EMPLOYEE_CREATE_SUCESS:
        case ACTIONS.EMPLOYEE_EDIT_SUCESS:
        case ACTIONS.EMPLOYEE_FORM_RESET:
            return { ...state, ...INIT_STATE };
        case ACTIONS.EMPLOYEE_CREATE_ERROR:
        case ACTIONS.EMPLOYEE_EDIT_ERROR:
            return { ...state, error: action.payload, processing: false };
        default:
            return state;
    }
};

export default EmployeeFormReducer;
