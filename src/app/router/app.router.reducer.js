import AppRouter from './app.router';

// Initial state will be the login screen
const initialState = AppRouter.router.getStateForAction(
    AppRouter.router.getActionForPathAndParams('Login')
);

export default (state = initialState, action) => {
    const nextState = AppRouter.router.getStateForAction(action, state);
    return nextState || state;
};
