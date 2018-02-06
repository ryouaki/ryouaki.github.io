import React from 'react';

import { 
    Box
 } from '../../../components';

import ProjectItem from './ProjectItem';
import HistoryItem from './HistoryItem';
import SkillItem from './SkillItem';
import TrainingItem from './TrainingItem';
import BaseInfoPanel from './BaseInfoPanel';

class BaseInfoContainer extends React.Component { 
    render() { 
        let { 
            userinfo = {},
            work_status = {},
            school = {},
            personal = '',
            skills = [],
            historys = [],
            projects = [],
            trainings = []
         } = this.props.detail || {};
        return (
            <Box size='18' className='body-container-baseinfo'>
                <div className='body-container-baseinfo-warp'>
                    <BaseInfoPanel title={  '基本信息' }>
                        <div><span>姓名：</span>{ userinfo.name }</div>
                        <div><span>英文：</span>{ userinfo.short_name }</div>
                        <div><span>性别：</span>{ userinfo.sex }</div>
                        <div><span>婚否：</span>{ userinfo.marry }</div>
                        <div><span>住址：</span>{ userinfo.address }</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={ '工作状态' }>
                        <div><span>工作状态：</span>{ work_status.job_status }/{ work_status.job_type }</div>
                        {false&&<div><span>状态：</span>{ work_status.wanting }</div>}
                        <div><span>当前职位：</span>{ work_status.job_title }</div>
                        <div><span>当前技术：</span>{ work_status.job_skills }</div>
                        <div><span>喜欢城市：</span>{ work_status.focus_city }</div>
                        <div><span>工作年限：</span>{ work_status.experience }</div>
                        {false&&<div><span>目前薪资：</span>{ work_status.current_salary }</div>}
                    </BaseInfoPanel>
                    <BaseInfoPanel title={ '教育情况' } className='baseinfo-personal-school'>
                        <div><span>学校：</span>{ school.college }</div>
                        <div><span>时间：</span>{ school.school_data }</div>
                        <div><span>专业：</span>{ school.specialization }</div>
                        <div><span>学历：</span>{ school.diploma }</div>
                        <div><span>备注：</span>{ school.comment }</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={ '自我介绍及评价' }>
                        <div className='baseinfo-personal-item'
                            dangerouslySetInnerHTML={ {  __html: personal  } }/>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={ '主要技能' }>
                        { 
                            skills.map((item, index) => { 
                                return <SkillItem
                                    key={ index + '' }
                                    skill={ item }
                                />
                             })
                         }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={ '任职经历' }>
                        { 
                            historys.map((item, index) => { 
                                return <HistoryItem
                                    key={ index + '' }
                                    history={ item }
                                />
                             })
                         }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={ '项目经历' }>
                        { 
                            projects.map((item, index) => { 
                                return <ProjectItem
                                    key={ index + '' }
                                    project={ item }
                                />
                             })
                         }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={ '技能培训' }>
                        { 
                            trainings.map((item, index) => { 
                                return <TrainingItem
                                    key={ index + '' }
                                    training={ item }
                                />
                             })
                         }
                    </BaseInfoPanel>
                </div>
            </Box>
        );
     }
 }

export default BaseInfoContainer;