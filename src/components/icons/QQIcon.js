import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class QQIcon extends React.Component {
    render() {

        let {
            height = '16',
            width = '16',
            viewBox = '0 0 28.031 30',
            className,
            fillRule = 'evenodd'
        } = this.props;

        return(
            <svg aria-hidden='true' className={classnames(className, 'ryou-icon-class')} height={height} viewBox={viewBox} width={width}>
                <path fillRule={fillRule}
                    d='M28.003,20.031 C27.355,16.375 24.633,13.980 24.633,13.980 C25.022,10.661 23.596,10.072 23.596,10.072 C23.296,-0.197 14.202,-0.018 14.010,-0.013 C13.819,-0.018 4.723,-0.197 4.425,10.072 C4.425,10.072 2.999,10.661 3.388,13.980 C3.388,13.980 0.666,16.375 0.018,20.031 C0.018,20.031 -0.328,26.208 3.129,20.787 C3.129,20.787 3.906,22.846 5.332,24.695 C5.332,24.695 2.783,25.536 2.999,27.721 C2.999,27.721 2.912,30.157 8.442,29.990 C8.442,29.990 12.330,29.696 13.497,28.099 L14.006,28.099 L14.015,28.099 L14.524,28.099 C15.691,29.696 19.579,29.990 19.579,29.990 C25.107,30.157 25.022,27.721 25.022,27.721 C25.237,25.536 22.689,24.695 22.689,24.695 C24.115,22.846 24.892,20.787 24.892,20.787 C28.347,26.208 28.003,20.031 28.003,20.031 Z'>
                </path>
            </svg>
        );
    }
}

export default QQIcon;