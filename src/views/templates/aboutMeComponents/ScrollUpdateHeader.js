import React from 'react';

export default class ScrollUpdateHeader extends React.Component {

    constructor(props) {
        super(props);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.items = [];
    }

    /*
     * 这里需要改造。如果不是每次重新取dom的信息，会导致计算不准确。应该是抓取高度的计算时机没掌握好。
     */
    scrollHandler() {
        let scrollTop = document.querySelector('#root > div').scrollTop;
        let titleText = [];
        this.items.forEach((e) => {
            if (((e.offsetTop - 56) <= scrollTop) && (e.offsetTop + e.clientHeight >= (scrollTop + 56))) {
                titleText.push(e.title);
            }
        });
        this.props.callbackHendler && this.props.callbackHendler(titleText.length ? titleText.join('/') : '个人简历');
    }

    refreshOffsetTops() {
        this.items = [];
        let baseItems = document.querySelectorAll('.body-container-baseinfo-warp > div');
        baseItems.forEach((el) => {
            let title = el.querySelector('.baseinfo-panel-title');
            this.items.push({
                offsetTop: el.offsetTop,
                clientHeight: el.clientHeight,
                title: title.innerText
            });
        });
    }

    componentDidMount() {
        document.querySelector('#root > div').addEventListener('scroll', this.scrollHandler, false);
    }

    /*
     * 这是一个很奇怪的现象，在每次父容器刷新的时候，会导致这个组件重新执行render，
     * 而我没有改变这里的任何属性，只是绑定了一个callback函数。看来在constructor里面bind函数并不能避免render的执行，但是dom是不刷新的。
     */
    componentWillUpdate(nextProps, nextState) {
        this.refreshOffsetTops();
    }

    render() {
        return null;
    }
}