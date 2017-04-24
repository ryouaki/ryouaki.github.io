import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class MobileIcon extends React.Component {
    render() {

        let {
            height = '16',
            width = '16',
            viewBox = '0 0 24 24',
            className,
            fillRule = 'evenodd'
        } = this.props;

        return(
            <svg aria-hidden='true' className={classnames(className, 'ryou-icon-class')} height={height} viewBox={viewBox} width={width}>
                <path fillRule={fillRule}
                    d='M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z'>
                </path>
            </svg>
        );
    }
}

export default MobileIcon;