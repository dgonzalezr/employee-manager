const ACTIONS = {
    // AUTH ACTIONS
    EMAIL_CHANGED: 'email_changed',

    PASSWORD_CHANGED: 'password_changed',

    LOGIN_USER: 'login_user',

    LOGIN_USER_PENDING: 'login_user_PENDING',

    LOGIN_USER_SUCCESS: 'login_user_FULFILLED',

    LOGIN_USER_ERROR: 'login_user_REJECTED',

    // EMPLOYEE FORM ACTIONS
    EMPLOYEE_FORM_UPDATE: 'employee_form_update',

    EMPLOYEE_FORM_RESET: 'employee_form_RESET',

    // EMPLOYEE CREATE ACTIONS
    EMPLOYEE_CREATE_SUBMIT: 'employee_create_submit',

    EMPLOYEE_CREATE_PENDING: 'employee_create_submit_PENDING',

    EMPLOYEE_CREATE_SUCESS: 'employee_create_submit_FULFILLED',

    EMPLOYEE_CREATE_ERROR: 'employee_create_submit_REJECTED',

    //EMPLOYE LIST ACTIONS
    EMPLOYE_LIST_FETCH: 'employee_list_fetch',

    EMPLOYE_LIST_FETCH_PENDING: 'employee_list_fetch_PENDING',

    EMPLOYE_LIST_FETCH_SUCESS: 'employee_list_fetch_FULFILLED',

    EMPLOYE_LIST_FETCH_ERROR: 'employee_list_fetch_REJECTED',

    //EMPLOYEE EDIT ACTIONS
    EMPLOYEE_EDIT_SUBMIT: 'employee_edit_submit',

    EMPLOYEE_EDIT_PENDING: 'employee_edit_submit_PENDING',

    EMPLOYEE_EDIT_SUCESS: 'employee_edit_submit_FULFILLED',

    EMPLOYEE_EDIT_ERROR: 'employee_edit_submit_REJECTED',

    EMPLOYEE_FIRE_SUBMIT: 'employee_fire_submit'
};

export default ACTIONS;
