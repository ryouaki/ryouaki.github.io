import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class HeaderBar extends React.Component {
    render() {

        let {
            layout = HeaderBar.HEADER_LAYOUT_TYPE_CENTER,
            className = '',
            ...other
        } = this.props;

        return (
            <header { ...other } className={classnames(
                "ryou-headerbar-container",
                `ryou-headerbar-container-layout-${layout}`,
                className
            )}>
                {this.props.children}
            </header>
        );
    }
}

HeaderBar.HEADER_LAYOUT_TYPE_BETWEEN = 'between';
HeaderBar.HEADER_LAYOUT_TYPE_START = 'start';
HeaderBar.HEADER_LAYOUT_TYPE_END = 'end';
HeaderBar.HEADER_LAYOUT_TYPE_CENTER = 'center';

export default HeaderBar;