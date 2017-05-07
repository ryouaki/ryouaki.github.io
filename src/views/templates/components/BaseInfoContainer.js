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
            personal='',
            skills = [],
            historys = [],
            projects = [],
            trainings = []
        } = this.props.detail||{};
        return(
            <Box size='18' className='body-container-baseinfo'>
                <div className='body-container-baseinfo-warp'>
                    <BaseInfoPanel title={'基本信息'}>
                        <div>姓名：{userinfo.name}</div>
                        <div>英文名：{userinfo.short_name}</div>
                        <div>性别：{userinfo.sex}</div>
                        <div>婚否：{userinfo.marry}</div>
                        <div>目前居住地：{userinfo.address}</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'工作状态'}>
                        <div>工作状态：{work_status.job_status}/{work_status.job_type}</div>
                        <div>状态：{work_status.wanting}</div>
                        <div>期望城市：{work_status.focus_city}</div>
                        <div>工作年限：{work_status.experience}</div>
                        <div>目前薪资：{work_status.current_salary}</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'教育情况'} className='baseinfo-personal-school'>
                        <div>学校：{school.college}</div>
                        <div>时间：{school.school_data}</div>
                        <div>专业：{school.specialization}</div>
                        <div>学历：{school.diploma}</div>
                        <div>备注：{school.comment}</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'自我介绍'}>
                        <div className='baseinfo-personal-item' 
                             dangerouslySetInnerHTML={{__html: personal}}>
                        </div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'主要技能'}>
                        {
                            skills.map( (item, index) => {
                                return <SkillItem 
                                            key={ index+'' }
                                            skill={item}
                                        />
                            })
                        }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'任职经历'}>
                        { 
                            historys.map( (item, index) => {
                                return <HistoryItem 
                                            key={ index+'' }
                                            history={item}
                                        />
                            })
                        }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'项目经历'}>
                        { 
                            projects.map( (item, index) => {
                                return <ProjectItem 
                                            key={ index+'' }
                                            project={item}
                                        />
                            })
                        }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'技能培训'}>
                        { 
                            trainings.map( (item, index) => {
                                return <TrainingItem 
                                            key={ index+'' }
                                            training={item}
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