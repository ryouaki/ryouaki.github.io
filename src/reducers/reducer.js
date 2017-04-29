import {
    ACTION_INIT
} from '../actions';

const INITIAL_STATE = {
    data: null
};

export default function (state = INITIAL_STATE, action = {type: ACTION_INIT}) {
    switch (action.type) {
        case ACTION_INIT:
            return { ...state, data: action.data };
        default:
            return state;
    }
}