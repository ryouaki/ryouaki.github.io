import React from 'react';

import { HeaderBar, HeaderItem } from '../../../components';

export default class MainContainer extends React.Component {
    render() {
        return(
            <div>
                <HeaderBar>
                    <HeaderItem>title1</HeaderItem>
                    <HeaderItem>title2</HeaderItem>
                    <HeaderItem>title2</HeaderItem>
                </HeaderBar>
                111222
            </div>
        );
    }
}