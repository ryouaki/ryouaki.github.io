import {
    combineReducers
} from 'redux';

import reducer from './reducer';

export default () => {
    return combineReducers({reducer})
};