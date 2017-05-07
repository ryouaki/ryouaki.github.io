import React from 'react';

class HistoryItem extends React.Component {
    render() {
        return(
            <section className='working-history-item'>
                <div>
                    <span>{ this.props.history.name }</span>&nbsp;({ this.props.history.from } ~ { this.props.history.to?this.props.history.to:'至今' })
                </div>
                <div>
                    <span>职位：</span>{this.props.history.job_title }
                </div>
                <div>
                    <span>工作内容：</span>{ this.props.history.description }
                </div>
                <div>
                    <span>备注：</span>{ this.props.history.comment }
                </div>
            </section>
        );
    }
}

export default HistoryItem;