import React from 'react';

import { 
    HeaderBar, 
    HeaderItem, 
    Container,
    FooterBar, 
    GithubIcon 
} from '../../../components';

export default class MainContainer extends React.Component {
    render() {
        return(
            <div>
                <HeaderBar align={ HeaderBar.HEADER_LAYOUT_TYPE_BETWEEN } className="headerbar-container">
                    <HeaderItem className="headerbar-item-left">
                        Ryou (梁亚辉)
                    </HeaderItem>
                    <HeaderItem align={ HeaderItem.HEADER_ITEM_ALIGN_RIGHT } className="headerbar-item-right">
                        <span>中文</span>
                        /
                        <span>English</span>
                    </HeaderItem>
                </HeaderBar>
                <Container className="body-container">
                    这是一个基于GitHub风格的React个人主页网站，还在开发中。
                </Container>
                <FooterBar align={ FooterBar.FOOTER_LAYOUT_TYPE_BETWEEN } className="footerbar-container">
                    <div className="footer-item-left">
                        &copy;&nbsp;2017&nbsp;Ryou-UI:&nbsp;
                        <a href="https://github.com/ryouaki/ryouaki.github.io">
                            https://ryouaki.github.com
                        </a>
                    </div>
                    <div className="footer-item-center">
                        <a href="https://github.com"><GithubIcon/></a>
                    </div>
                    <div className="footer-item-right">
                        Ryou's&nbsp;
                        <a href="https://github.com/ryouaki">GitHub</a>&nbsp;|&nbsp;
                        <a href="mailto:46517115@qq.com">Email</a>&nbsp;|&nbsp;
                        <a href="tel:13940923382">Mobile</a>
                    </div>
                </FooterBar>
            </div>
        );
    }
}