import React from 'react';

class SkillItem extends React.Component {
    render() {
        return(
            <section className='skill-history-item'>
                <div>
                    { this.props.skill.name }&nbsp;({this.props.skill.experience}年)
                </div>
                <div>
                    描述：<br/>
                    {this.props.skill.comments}
                </div>
            </section>
        );
    }
}

export default SkillItem;