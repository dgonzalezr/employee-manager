import ACTIONS from '../../config/app.actions';
import {
    createEmployee,
    updateEmployee,
    removeEmployee
} from '../../services/api';

const employeeFormUpdate = ({ prop, value }) => ({
    type: ACTIONS.EMPLOYEE_FORM_UPDATE,
    payload: { prop, value }
});

const employeeFormReset = () => ({
    type: ACTIONS.EMPLOYEE_FORM_RESET
});

const employeeCreateSubmit = ({ name, phone, shift }) => ({
    type: ACTIONS.EMPLOYEE_CREATE_SUBMIT,
    payload: createEmployee({ name, phone, shift })
});

const employeeEditSubmit = ({ name, phone, shift, uid }) => ({
    type: ACTIONS.EMPLOYEE_EDIT_SUBMIT,
    payload: updateEmployee({ name, phone, shift, uid })
});

const employeeFireSubmit = ({ uid }) => ({
    type: ACTIONS.EMPLOYEE_FIRE_SUBMIT,
    payload: removeEmployee({ uid })
});

export {
    employeeFormUpdate,
    employeeFormReset,
    employeeCreateSubmit,
    employeeEditSubmit,
    employeeFireSubmit
};
