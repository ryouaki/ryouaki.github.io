import React from 'react';

class TrainingItem extends React.Component {
    render() {
        return(
            <section className='training-history-item'>
                <div>
                    { this.props.training.name }&nbsp;({ this.props.training.from } ~ { this.props.training.to })
                </div>
            </section>
        );
    }
}

export default TrainingItem;