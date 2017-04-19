import React from 'react';

import './styles/index.less';

export default class HeaderItem extends React.Component {
    render() {
        return(
            <header className="ryou-headeritem-container">
                { this.props.children }
            </header>
        );
    }
}