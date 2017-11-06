import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import AppReducers from './app.reducers';

const createStoreWithMiddleware = createStore(
    AppReducers,
    {},
    applyMiddleware(promiseMiddleware())
);

export default createStoreWithMiddleware;
