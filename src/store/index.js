import {
    createStore,
    applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import initReducer from '../reducers';

let middleware = [ReduxThunk, createLogger()];

let reducers = initReducer();

export default () => {
    let store = createStore(
        reducers,
        applyMiddleware(...middleware)
    )
    return store;
}