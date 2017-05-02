import React from 'react';

class ProjectItem extends React.Component {
    render() {
        return(
            <section className='project-history-item'>
                <div>
                    { this.props.project.name }	&nbsp;({this.props.project.from} ~ {this.props.project.to?this.props.project.to:'至今'})
                </div>
                <div>
                    系统运行环境：{this.props.project.environment}
                </div>
                <div>
                    主要开发技术：{this.props.project.skills}
                </div>
                <div>
                    主要开发工具：{this.props.project.tools}
                </div>
                <div>
                    主要工作职责：{this.props.project.job}
                </div>
                <div>
                    项目及工作内容介绍：<br/>
                    {this.props.project.description}
                </div>
            </section>
        );
    }
}

export default ProjectItem;