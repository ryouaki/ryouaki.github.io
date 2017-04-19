require('./common');

import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import MainView from './views/MainView';

import './styles/index.less';
import './styles/index_mobile.less';

ReactDOM.render(
    <Router>
        <Route exact path='/' component={MainView}/>
    </Router>,
    document.getElementById('root')
);
