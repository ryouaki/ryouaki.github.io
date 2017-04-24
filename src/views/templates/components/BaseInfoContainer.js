import React from 'react';

import { 
    Box
} from '../../../components';

class BaseInfoContainer extends React.Component {
    render() {
        return(
            <Box size='18' className='body-container-baseinfo'>
                <div className='body-container-baseinfo-warp'>
                    <div className='body-container-baseinfo-warp-item-userinfo'>
                        <div className='body-container-baseinfo-warp-item-userinfo-name'>
                            111
                        </div>
                    </div>
                    <div className='body-container-baseinfo-warp-item-relativeship'>
                        222
                    </div>
                    <div className='body-container-baseinfo-warp-item-personal'>
                        333
                    </div>
                </div>
            </Box>
        );
    }
}

export default BaseInfoContainer;