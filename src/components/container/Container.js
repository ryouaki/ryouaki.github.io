import React from 'react';
import classnames from 'classnames';

import './styles/index.less';

class Container extends React.Component {
    render() {

        let {
            ...other
        } = this.props;

        return (
            <section { ...other } >
                {this.props.children}
            </section>
        );
    }
}

export default Container;