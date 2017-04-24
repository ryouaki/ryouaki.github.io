import React from 'react';

import { 
    Box
} from '../../../components';

class BaseInfoContainer extends React.Component {
    render() {
        return(
            <Box size='18' className='body-container-baseinfo'>
                <div className='body-container-baseinfo-warp'>
                    <div style={{width: '50%'}}>
                        111
                    </div>
                    <div style={{width: '50%'}}>
                        222
                    </div>
                    <div style={{width: '100%'}}>
                        333
                    </div>
                </div>
            </Box>
        );
    }
}

export default BaseInfoContainer;