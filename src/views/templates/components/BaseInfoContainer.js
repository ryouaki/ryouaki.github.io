import React from 'react';

import { 
    Box
} from '../../../components';

class BaseInfoContainer extends React.Component {
    render() {
        return(
            <Box size='16' className='body-container-baseinfo'>
                <div className='body-container-baseinfo-warp'>
                    <div className='body-container-baseinfo-warp-item-userinfo'>
                        <div className='body-container-baseinfo-warp-item-userinfo-name'>
                            <span>11111</span>
                            <span>content,content,content,content</span>
                        </div>
                        <div className='body-container-baseinfo-warp-item-userinfo-name'>
                            <span>11111</span>
                            <span>content,content,content,content</span>
                        </div>
                        <div className='body-container-baseinfo-warp-item-userinfo-name'>
                            <span>11111</span>
                            <span>content,content,content,content</span>
                        </div>
                    </div>
                    <div className='body-container-baseinfo-warp-item-relativeship'>
                        222
                    </div>
                    <div className='body-container-baseinfo-warp-item-personal'>
                        333
                    </div>
                    <div className='body-container-baseinfo-warp-item-personal'>
                        444
                    </div>
                    <div className='body-container-baseinfo-warp-item-personal'>
                        5555
                    </div>
                </div>
            </Box>
        );
    }
}

export default BaseInfoContainer;