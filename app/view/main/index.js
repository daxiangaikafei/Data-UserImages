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

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            data: ""
        }
    }

    checkLogin(props){
        let isLogin = false
        if(!props.isLogin){
            if([RouterConst.ROUTER_HOME, RouterConst.ROUTER_LOGIN, RouterConst.ROUTER_REGISTER].indexOf(props.location.pathname) < 0){
                hashHistory.push(RouterConst.ROUTER_LOGIN)
            }
        }
    }

    componentWillMount(){
        this.props.checkLogin()
    }

    componentWillReceiveProps(nextProps){
        this.checkLogin(nextProps)
        console.log(this.props.location.query,7777)
    }

    componentDidMount() {
        this.setState({
            data: menuData.data
        })
    }

    getMenuByRouter() {
        let text=this.props.location.query.text;
        console.log(text,3999)
        text&&this.props.getCurrent(text);

        if(this.props.location.pathname.indexOf(RouterConst.USER_MIRROR.substring(0, RouterConst.USER_MIRROR.indexOf('/:')))>=0){
            return ''
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
                return <Sider className="sider siderSearchMenu"><SiderSearchMenu /></Sider>
            default:
                return <Sider className="sider"><SiderMenu data={this.state.data} /></Sider>
        }
    }

    handlerCurrent(e) {
        console.log(e)
    }

    render() {
        

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