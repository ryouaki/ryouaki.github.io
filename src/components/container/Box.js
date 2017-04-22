import React from 'react';
import classnames from 'classnames'

import './styles/index.less';

class Box extends React.Component {
    render() {

        let {
            className,
            size,
            ...other
        } = this.props;

        return (
            <div { ...other } className={ classnames(
                className, 
                'ryou-container-box', 
                `ryou-container-box-size-${size}`
            )}>
                {this.props.children}
            </div>
        );
    }
}

export default Box;