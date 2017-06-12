import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { hashHistory } from 'react-router'
import Headers from '../../components/header'
import IndexHeader from '../../components/indexHeader'
import SiderMenu from '../../components/siderMenu'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import './index.scss'

import * as RouterConst from '../../static/const'
import * as menuData from '../../static/const/menu'

import SiderSearchMenu from '../../components/siderSearch'

import { checkLogin } from '../login/reducer/action'
import { getCurrent } from '../../components/siderMenu/reducer/action';

import classnames from 'classnames'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            data: "",
            silderFold: false
        }
    }

    checkLogin(props){
        if(!props.isLogin){
            if([RouterConst.ROUTER_HOME, RouterConst.ROUTER_LOGIN, RouterConst.ROUTER_REGISTER].indexOf(props.location.pathname) < 0){
                hashHistory.push(RouterConst.ROUTER_LOGIN)
            }
        }
    }

    componentWillMount(){
        let state = this.props.checkLogin()
        if(state == this.props.isLogin){
            this.checkLogin(this.props)
        }
    }

    componentWillReceiveProps(nextProps){
        this.checkLogin(nextProps)
    }

    componentDidMount() {
        this.setState({
            data: menuData.data
        })
    }

    onChangeSilderFold(val){
        this.setState({silderFold: val})
    }

    getMenuByRouter() {

        let text=this.props.location.query.text;
        text&&this.props.getCurrent(text);
        let { silderFold } = this.state
        let classSilder = {
            sider: !silderFold,
            siderSearchMenu: !silderFold,
            silderFold: silderFold
        }
        if(this.props.location.pathname.indexOf(RouterConst.USER_MIRROR.substring(0, RouterConst.USER_MIRROR.indexOf('/:')))>=0){
            return ''
        }
        if(this.props.location.pathname.indexOf('dev')>=0){
            return <Sider className="sider sider-dev"><SiderMenu data={menuData.data2} /></Sider>
        }
        switch (this.props.location.pathname) {
            case RouterConst.ROUTER_HOME:
            case RouterConst.ROUTER_LOGIN:
            case RouterConst.ROUTER_REGISTER:
            case RouterConst.ROUTER_FORGET_PW:
            case RouterConst.ROUTER_RESET_PW:
                return ""
            case RouterConst.SEARCH_LIST:
            case RouterConst.ROUTER_FAVORITE:
                return <Sider className={classSilder}><SiderSearchMenu silderFold={this.state.silderFold} onChangeSilderFold={(b)=>this.onChangeSilderFold(b)} /></Sider>
            default:
                return <Sider className="sider"><SiderMenu data={this.state.data} /></Sider>
        }
    }

    handlerCurrent(e) {
        console.log(e)
    }

    render() {
        
        let title=this.props.location.pathname.indexOf('dev')>=0?<div className="technology">平台技术文档</div>:"";
        let curr = this.props.location.query.current;
        let top;
        let oClass;
        switch (this.props.location.pathname) {
            case RouterConst.ROUTER_HOME:
            case RouterConst.ROUTER_LOGIN:
            case RouterConst.ROUTER_REGISTER:
            case RouterConst.ROUTER_FORGET_PW:
            case RouterConst.ROUTER_RESET_PW:
            case RouterConst.USER_MIRROR:
                top = <Headers />
                oClass = ""
                break;
            case RouterConst.SEARCH_LIST:
                top = <IndexHeader />
                oClass = "oBg2"
                break
            default:
                top = <IndexHeader />
                oClass = "oBg"
                break
        }

        return (

            <div className={oClass}>
                <Layout style={{ minHeight: '100%' }}>
                    {top}
                    {title}
                    <Layout className="wapper">
                        {this.getMenuByRouter()}
                        <Content className={oClass ? "oBg wrap" : "wrap"}>
                            {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

App.PropTypes = {
    isLogin: PropTypes.bool.isRequired
}

let mapStateToProps = state => ({
    isLogin: state.loginReducer.isLogin
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ checkLogin ,getCurrent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)