import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class FooterBar extends React.Component {
    render() {

        let {
            align = FooterBar.HEADER_LAYOUT_TYPE_CENTER,
            className = '',
            ...other
        } = this.props;

        return (
            <footer { ...other } className={classnames(
                'ryou-footerbar-container',
                `ryou-footerbar-container-layout-${align}`,
                className
            )}>
                {this.props.children}
            </footer>
        );
    }
}

FooterBar.FOOTER_LAYOUT_TYPE_BETWEEN = 'between';
FooterBar.FOOTER_LAYOUT_TYPE_START = 'start';
FooterBar.FOOTER_LAYOUT_TYPE_END = 'end';
FooterBar.FOOTER_LAYOUT_TYPE_CENTER = 'center';

export default FooterBar;