import React from 'react';

class BaseInfoPanel extends React.Component {
    render() {
        let { 
            className
        } = this.props;
        return(
            <div className={className}>
                <div className='baseinfo-panel-title'>
                    { this.props.title }
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default BaseInfoPanel;