import React from 'react';

class ProjectItem extends React.Component { 
    render() { 
        return(
            <section className='project-history-item'>
                <div>
                    <span>{ this.props.project.name }</span>&nbsp;
                    ({ this.props.project.from } ~ { this.props.project.to?this.props.project.to:'至今' })
                </div>
                <div>
                    <span>系统运行环境：</span>{ this.props.project.environment }
                </div>
                <div>
                    <span>主要开发技术：</span>{ this.props.project.skills }
                </div>
                <div>
                    <span>主要开发工具：</span>{ this.props.project.tools }
                </div>
                <div>
                    <span>主要工作职责：</span>{ this.props.project.job }
                </div>
                <div>
                    <span>项目及工作内容介绍：</span>{ this.props.project.description }
                </div>
            </section>
        );
     }
 }

export default ProjectItem;