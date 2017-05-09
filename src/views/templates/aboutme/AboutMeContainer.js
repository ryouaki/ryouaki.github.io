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

    constructor(props) {
        super(props);
        this.state = {
            headerTitle: '个人简历'
        };

        this.scrollHandler = this.scrollHandler.bind(this);
    }

    scrollHandler() {
        let scrollTop = document.querySelector('#root > div').scrollTop;
        let baseItems = document.querySelectorAll('.body-container-baseinfo-warp > div');
        let titleText = [];
        // 每次遍历所有元素貌似不太好。。。。。虽然可以在构建后缓存所有元素然后不用每次都取。
        // 但是，如果是一个动态列表呢？这里是否有好的办法呢？
        baseItems.forEach( (el) => {
            if (((el.offsetTop - 56) <= scrollTop) && (el.offsetTop + el.clientHeight >= (scrollTop + 56))) {
                let title = el.querySelector('.baseinfo-panel-title');
                titleText.push(title.innerText);
            }
        });
        this.setState( {
            headerTitle: titleText.length?titleText.join('/'):'个人简历'
        }) ;
    }

    componentDidMount() {
        this.props.action_init();
        document.querySelector('#root > div').addEventListener('scroll', this.scrollHandler, false);
    }

    render() {
        return(
            <div>
                <div className='headerbar-warp'>
                    <HeaderBar align={ HeaderBar.HEADER_LAYOUT_TYPE_BETWEEN } className='headerbar-container'>
                        <HeaderItem className='headerbar-item-left'>
                            <a href='/'>关于我-Ryou</a>
                            {false&&<a href='/#/github'>&nbsp;/&nbsp;关于Ryou-UI</a>}
                        </HeaderItem>
                        <HeaderItem className='headerbar-item-center'>
                            { this.state.headerTitle }
                        </HeaderItem>
                        <HeaderItem align={ HeaderItem.HEADER_ITEM_ALIGN_RIGHT } className='headerbar-item-right'>
                            <span>中文</span>
                            /
                            <span>English(未完)</span>
                        </HeaderItem>
                    </HeaderBar>
                </div>
                <Container className='body-container'>
                    <ProfileContainer
                    />
                    <BaseInfoContainer 
                        detail={this.props.data}
                    />
                </Container>
                <FooterBar align={ FooterBar.FOOTER_LAYOUT_TYPE_BETWEEN } className='footerbar-container'>
                    <div className='footer-item-left'>
                        &copy;&nbsp;2017&nbsp;Ryou's&nbsp;
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