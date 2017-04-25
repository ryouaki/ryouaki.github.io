import React from 'react';

import { 
    Box
} from '../../../components';

import ProjectItem from './ProjectItem';
import HistoryItem from './HistoryItem';

class BaseInfoContainer extends React.Component {
    render() {

        let works = [];
        for (let i = 0; i < 20; i++) {
            works.push(<HistoryItem key={ i+'' }/>);
        }

        let projects = [];
        for (let i = 0; i < 20; i++) {
            projects.push(<ProjectItem key={ i+'' }/>);
        }

        return(
            <Box size='16' className='body-container-baseinfo'>
                <div className='body-container-baseinfo-warp'>
                    <div>
                        这里是不是该把婚姻状况，毕业院校什么的摆一摆？
                    </div>
                    <div>
                        其实真没想好放什么，感觉左侧基本就介绍完个人信息了。
                    </div>
                    <div>
                        感觉应该写一些自我介绍，工作感言才显得高大上。
                    </div>
                    <div>
                        这里放技能树
                    </div>
                    <div>
                        这里计划写一些任职经历
                        { works }
                    </div>
                    <div>
                        这里可以写很多项目经历
                        { projects }
                    </div>
                </div>
            </Box>
        );
    }
}

export default BaseInfoContainer;