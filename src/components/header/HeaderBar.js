import React from 'react';

import './styles/index.less';
import './styles/index_mobile.less';

export default class HeaderBar extends React.Component {
    render() {
        return(
            <header className="ryou-headerbar-container">
                { this.props.children }
            </header>
        );
    }
}