import firebase from 'firebase';
import AppStore from '../../config/app.store';

const signIn = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

const signUp = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

const createEmployee = ({ name, phone, shift }) => {
    const { user } = AppStore.getState().auth;
    return firebase
        .database()
        .ref(`/users/${user.uid}/employees`)
        .push({ name, phone, shift });
};

const fetchEmployees = () => {
    const { user } = AppStore.getState().auth;
    return new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(`/users/${user.uid}/employees`)
            .on(
                'value',
                snapshot => resolve(snapshot.val()),
                error => reject(error)
            );
    });
};

const updateEmployee = ({ name, phone, shift, uid }) => {
    const { user } = AppStore.getState().auth;
    return firebase
        .database()
        .ref(`/users/${user.uid}/employees/${uid}`)
        .set({ name, phone, shift });
};

const removeEmployee = ({ uid }) => {
    const { user } = AppStore.getState().auth;
    return firebase
        .database()
        .ref(`/users/${user.uid}/employees/${uid}`)
        .remove();
};

export {
    signIn,
    signUp,
    createEmployee,
    fetchEmployees,
    updateEmployee,
    removeEmployee
};
