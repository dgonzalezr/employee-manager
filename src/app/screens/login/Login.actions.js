import ACTIONS from '../../config/app.actions';
import { signIn, signUp } from '../../services/api';

/**
 * Authentication action funtions
 */

const emailChanged = email => ({
    type: ACTIONS.EMAIL_CHANGED,
    payload: email
});

const passwordChanged = password => ({
    type: ACTIONS.PASSWORD_CHANGED,
    payload: password
});

const loginUser = ({ email, password }) => ({
    type: ACTIONS.LOGIN_USER,
    payload: signIn(email, password)
});

const registerUser = ({ email, password }) => ({
    type: ACTIONS.LOGIN_USER,
    payload: signUp(email, password)
});

export { emailChanged, passwordChanged, loginUser, registerUser };
