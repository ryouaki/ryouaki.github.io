import React from 'react';

class BaseInfoPanel extends React.Component {
    render() {
        return(
            <div>
                <div className="baseinfo-panel-title">
                    { this.props.title }
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default BaseInfoPanel;