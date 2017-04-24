import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class HeaderItem extends React.Component {
    render() {

        let {
            className = '',
            align = HeaderItem.HEADER_ITEM_ALIGN_LEFT
        } = this.props;

        return(
            <div className={classnames(
                "ryou-headeritem-container",
                `ryou-headeritem-container-align-${align}`,
                className
            )}>
                { this.props.children }
            </div>
        );
    }
}

HeaderItem.HEADER_ITEM_ALIGN_CENTER = 'cemter';
HeaderItem.HEADER_ITEM_ALIGN_RIGHT  = 'right';
HeaderItem.HEADER_ITEM_ALIGN_LEFT   = 'left';

export default HeaderItem;