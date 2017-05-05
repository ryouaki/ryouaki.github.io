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

        return(
            <Box size='16' className='body-container-baseinfo'>
                <div className='body-container-baseinfo-warp'>
                    <BaseInfoPanel title={'基本信息'}>
                        <div>姓名：梁亚辉</div>
                        <div>英文名：ryou</div>
                        <div>性别：男</div>
                        <div>婚否：已婚</div>
                        <div>目前居住地：辽宁省大连市沙河口区</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'工作状态'}>
                        <div>工作：在职</div>
                        <div>状态：考虑更好的机会</div>
                        <div>期望城市：南京，上海，大连</div>
                        <div>目前薪资：24w／年</div>
                        <div>期望薪资：上海28w／年，南京28w／年，大连28w／年</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'教育情况'} className='baseinfo-personal-school'>
                        <div>学校：辽宁对外经贸大学</div>
                        <div>时间：2002/9～2005/7</div>
                        <div>专业：计算机与信息管理</div>
                        <div>学历：大专</div>
                        <div>备注：必须承认学历的影响还是非常大的。但是我还是喜欢从自身找原因，如果我的能力真的很优秀，还会有人在乎我的学历吗？</div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'自我介绍'}>
                        <div className='baseinfo-personal-item' 
                             dangerouslySetInnerHTML={{__html: this.props.personal}}>
                        </div>
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'主要技能'}>
                        {
                            this.props.skills.map( (item, index) => {
                                return <SkillItem 
                                            key={ index+'' }
                                            skill={item}
                                        />
                            })
                        }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'任职经历'}>
                        { 
                            this.props.historys.map( (item, index) => {
                                return <HistoryItem 
                                            key={ index+'' }
                                            history={item}
                                        />
                            })
                        }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'项目经历'}>
                        { 
                            this.props.projects.map( (item, index) => {
                                return <ProjectItem 
                                            key={ index+'' }
                                            project={item}
                                        />
                            })
                        }
                    </BaseInfoPanel>
                    <BaseInfoPanel title={'技能培训'}>
                        { 
                            this.props.trainings.map( (item, index) => {
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