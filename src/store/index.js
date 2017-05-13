import {
    createStore,
    applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import logger from 'redux-diff-logger';
import initReducer from '../reducers';

let middleware = [ReduxThunk, createLogger()];

let reducers = initReducer();


const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
// const store = createStoreWithMiddleware(reducer);

export default () => {
    let store = createStoreWithMiddleware(
        reducers,
        applyMiddleware(...middleware)
    )
    return store;
}