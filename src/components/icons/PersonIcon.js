import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class PersonIcon extends React.Component {
    render() {

        let {
            height = '16',
            width = '16',
            viewBox = '0 0 24 24',
            className,
            fillRule = 'evenodd'
        } = this.props;

        return(
            <svg aria-hidden='true' className={classnames('ryou-icon-class', className)} height={height} viewBox={viewBox} width={width}>
                <path fillRule={fillRule}
                    d='M 12 12 C 14.763 12 17 9.762 17 7.001 C 17 4.239 14.763 2 12 2 C 9.239 2 7.001 4.239 7.001 7.001 C 7.001 9.762 9.239 12 12 12 Z M 12 14.5 C 8.664 14.5 2 16.176 2 19.5 L 2 22 L 22 22 L 22 19.5 C 22 16.176 15.339 14.5 12 14.5 Z'>
                </path>
            </svg>
        );
    }
}

export default PersonIcon;