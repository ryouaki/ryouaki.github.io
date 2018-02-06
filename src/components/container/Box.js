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
                'ryou-container-box', 
                `ryou-container-box-size-${size}`,
                className
            )}>
                {this.props.children}
            </div>
        );
    }
}

export default Box;