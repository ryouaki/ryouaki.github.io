require('./common');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeCreate from './store';

import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import AboutMeView from './views/AboutMeView';
import GithubComponentsView from './views/GithubComponentsView';

import './styles/index.less';
import './styles/index_mobile.less';

let store = storeCreate();

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route exact path='/' component={ AboutMeView }/>
                <Route exact path='/github' component={ GithubComponentsView }/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
