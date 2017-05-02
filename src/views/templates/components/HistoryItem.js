import React from 'react';

class HistoryItem extends React.Component {
    render() {
        return(
            <section className='working-history-item'>
                <div>
                    { this.props.history.name }	&nbsp;({ this.props.history.from } ~ { this.props.history.to?this.props.history.to:'至今' })
                </div>
                <div>
                    职位：{this.props.history.job_title }
                </div>
                <div>
                    工作内容：{ this.props.history.description }
                </div>
                <div>
                    离开原因<br/>
                    { this.props.history.comment }
                </div>
            </section>
        );
    }
}

export default HistoryItem;