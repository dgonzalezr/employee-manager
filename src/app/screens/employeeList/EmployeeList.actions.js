import ACTIONS from '../../config/app.actions';
import { fetchEmployees } from '../../services/api';

const employeeListFetch = () => ({
    type: ACTIONS.EMPLOYE_LIST_FETCH,
    payload: fetchEmployees()
});

export { employeeListFetch };
