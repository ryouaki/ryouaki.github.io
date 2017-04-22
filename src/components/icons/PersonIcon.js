import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class PersonIcon extends React.Component {
    render() {

        let {
            height = '16',
            width = '16',
            viewBox = '0 0 16 16',
            className,
            fillRule = 'evenodd'
        } = this.props;

        return(
            <svg aria-hidden='true' className={classnames(className, 'ryou-icon-class')} height={height} viewBox={viewBox} width={width}>
                <path fillRule={fillRule}
                    d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'>
                </path>
            </svg>
        );
    }
}

export default PersonIcon;