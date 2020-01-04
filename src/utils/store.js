import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from '../reducers/combineReducers.js';

export default function configureStore() {
    return createStore(
        combineReducers,
        applyMiddleware(thunk)
    );
}