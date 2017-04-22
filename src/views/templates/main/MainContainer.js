import React from 'react';

import { HeaderBar, HeaderItem } from '../../../components';

export default class MainContainer extends React.Component {
    render() {
        return(
            <div>
                <HeaderBar align={ HeaderBar.HEADER_LAYOUT_TYPE_BETWEEN } className="headerbar-container">
                    <HeaderItem className="headerbar-item-left">
                        梁亚辉(Ryou) - Hi1896
                    </HeaderItem>
                    <HeaderItem align={ HeaderItem.HEADER_ITEM_ALIGN_RIGHT } className="headerbar-item-right">
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