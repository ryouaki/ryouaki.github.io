require('./common');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeCreate from './store';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import MainView from './views/MainView';

import './styles/index.less';
import './styles/index_mobile.less';

let store = storeCreate();

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Route exact path='/' component={ MainView }/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
