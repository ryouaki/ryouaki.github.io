import React from 'react';
import { Box, GroupIcon, PersonIcon } from '../../../components';

class ProfileContainer extends React.Component {
    render() {
        return(
            <Box size='6' className='body-container-profile'>
                <div className='body-container-profile-avatar'>
                    <img src='https://avatars0.githubusercontent.com/u/9922563?v=3&s=460' alt='Github上的头像'/>
                </div>
                <div className='body-container-profile-userinfo'>
                    <div className='body-container-profile-name'>
                        YA HUI, LIANG(Ryou)
                    </div>
                    <div className='body-container-profile-title'>
                        JavaScript Full-Stack Engineer
                    </div>
                    <div className='body-container-profile-notice'>
                        Hi Ryou-UI(GitHub's' style React-Component library) is coming!
                    </div>
                </div>
                <div className='body-container-profile-contact'>
                    <div className='body-container-profile-text'>
                        Dalian, Liaoning, China
                    </div>
                    <div className='body-container-profile-text'>
                        liang_146@163.com
                    </div>
                    <div className='body-container-profile-text'>
                        46517115
                    </div>
                    <div className='body-container-profile-text'>
                        lianghui086343
                    </div>
                    <div className='body-container-profile-text'>
                        13940923382
                    </div>
                </div>
                <div className='body-container-profile-organization'>
                    <div className='body-container-profile-text'>
                        <GroupIcon/><span>Shengjing360 Cloud</span>
                    </div>
                    <div className='body-container-profile-text'>
                        <PersonIcon/><span>Senior Front-End Engineer</span>
                    </div>
                </div>
            </Box>
        );
    }
}

export default ProfileContainer;