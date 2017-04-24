import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class EmailIcon extends React.Component {
    render() {

        let {
            height = '16',
            width = '16',
            viewBox = '0 0 16 16',
            className,
            fillRule = 'evenodd'
        } = this.props;

        return(
            <svg aria-hidden='true' className={classnames('ryou-icon-class', className)} height={height} viewBox={viewBox} width={width}>
                <path fillRule={fillRule}
                    d='M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z'>
                </path>
            </svg>
        );
    }
}

export default EmailIcon;