import React from 'react';

class TrainingItem extends React.Component {
    render() {
        return(
            <section className='training-history-item'>
                <div>
                    { this.props.training.from } ~ { this.props.training.to }<br/>{ this.props.training.name }
                </div>
            </section>
        );
    }
}

export default TrainingItem;