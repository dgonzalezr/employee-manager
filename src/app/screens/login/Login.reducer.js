import ACTIONS from '../../config/app.actions';

const INIT_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    processing: false
};

const AuthReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case ACTIONS.PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case ACTIONS.LOGIN_USER_PENDING:
            return { ...state, error: '', processing: true };
        case ACTIONS.LOGIN_USER_SUCCESS:
            return { ...state, ...INIT_STATE, user: action.payload };
        case ACTIONS.LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                user: null,
                password: '',
                processing: false
            };
        default:
            return state;
    }
};

export default AuthReducer;
