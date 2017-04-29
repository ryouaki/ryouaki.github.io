import {
    ACTION_APP_INIT
} from './index';

import {data_cd} from '../data/profile_cn.json';

export function action_init() {
    return {
        type: ACTION_APP_INIT,
        data: data_cd
    }
}