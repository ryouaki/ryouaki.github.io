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
                    <div>
                        这里是不是该把婚姻状况，毕业院校什么的摆一摆？
                    </div>
                    <div>
                        其实真没想好放什么，感觉左侧基本就介绍完个人信息了。
                    </div>
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