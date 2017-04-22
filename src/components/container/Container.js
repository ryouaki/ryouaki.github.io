import React from 'react';
import classnames from 'classnames'

import './styles/index.less';

class Container extends React.Component {
    render() {

        let {
            className,
            ...other
        } = this.props;

        return (
            <section { ...other } className={
                classnames(className, 'ryou-container')
            }>
                {this.props.children}
            </section>
        );
    }
}

export default Container;