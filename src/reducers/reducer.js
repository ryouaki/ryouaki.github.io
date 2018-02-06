import {
    ACTION_APP_INIT
} from '../actions';

const INITIAL_STATE = {
    data: null
};

export default function (state = INITIAL_STATE, action = {type: ACTION_APP_INIT}) {
    switch (action.type) {
        case ACTION_APP_INIT:
            return { ...state, data: action.data };
        default:
            return state;
    }
}