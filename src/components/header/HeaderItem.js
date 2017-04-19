import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

export default class HeaderItem extends React.Component {
    render() {

        let {
            className = ''
        } = this.props;

        return(
            <header className={classnames(className, "ryou-headeritem-container")}>
                { this.props.children }
            </header>
        );
    }
}