import React from 'react';

import { 
    HeaderBar, 
    HeaderItem, 
    Container,
    FooterBar, 
    GithubIcon 
} from '../../../components';

import {
    ProfileContainer,
    BaseInfoContainer
} from '../aboutMeComponents'

export default class MainContainer extends React.Component {

    componentDidMount() {
        this.props.action_init();
    }

    render() {
        return(
            <div>
                <HeaderBar align={ HeaderBar.HEADER_LAYOUT_TYPE_BETWEEN } className='headerbar-container'>
                    <HeaderItem className='headerbar-item-left'>
                        <a href='https://ryouaki.github.com'>关于我-Ryou</a>
                        <a href='https://ryouaki.github.com/github'>&nbsp;/&nbsp;关于Ryou-UI</a>
                    </HeaderItem>
                    <HeaderItem className='headerbar-item-center'>
                        <a href='https://github.com/ryouaki/ryouaki.github.io'><GithubIcon/></a>
                    </HeaderItem>
                    <HeaderItem align={ HeaderItem.HEADER_ITEM_ALIGN_RIGHT } className='headerbar-item-right'>
                        <span>中文</span>
                        /
                        <span>English(未完)</span>
                    </HeaderItem>
                </HeaderBar>
                <Container className='body-container'>
                    <ProfileContainer
                    />
                    <BaseInfoContainer 
                        detail={this.props.data}
                    />
                </Container>
                <FooterBar align={ FooterBar.FOOTER_LAYOUT_TYPE_BETWEEN } className='footerbar-container'>
                    <div className='footer-item-left'>
                        &copy;&nbsp;2017&nbsp;~&nbsp;2017&nbsp;Ryou's&nbsp;
                        <a href='https://github.com/ryouaki/ryouaki.github.io'>
                            Personal Web-Page
                        </a>
                    </div>
                    <div className='footer-item-center'>
                        <a href='https://github.com'><GithubIcon/></a>
                    </div>
                    <div className='footer-item-right'>
                        Ryou's&nbsp;
                        <a href='https://github.com/ryouaki'>GitHub</a>&nbsp;|&nbsp;
                        <a href='mailto:46517115@qq.com'>Email</a>&nbsp;|&nbsp;
                        <a href='tel:13940923382'>Mobile</a>
                    </div>
                </FooterBar>
            </div>
        );
    }
}