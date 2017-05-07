import React from 'react';

class SkillItem extends React.Component {
    render() {
        return(
            <section className='skill-history-item'>
                <div>
                    <span>{ this.props.skill.name }&nbsp;({ this.props.skill.experience }年)</span>
                </div>
                <div>
                    <span>描述：</span>{ this.props.skill.comments }
                </div>
            </section>
        );
    }
}

export default SkillItem;