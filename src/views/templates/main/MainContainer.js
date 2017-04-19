import React from 'react';

import { HeaderBar, HeaderItem } from '../../../components';

export default class MainContainer extends React.Component {
    render() {
        return(
            <div>
                <HeaderBar layout={ HeaderBar.HEADER_LAYOUT_TYPE_BETWEEN } className="headerbar-container">
                    <HeaderItem className="headerbar-item-left">
                        Hi1896-Ryouaki
                    </HeaderItem>
                    <HeaderItem className="headerbar-item-right">
                        <span>中文</span>
                        /
                        <span>English</span>
                    </HeaderItem>
                </HeaderBar>
                111222
            </div>
        );
    }
}