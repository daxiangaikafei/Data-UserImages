import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Router, Route, IndexRoute, Link ,hashHistory} from 'react-router';
import { Layout, Menu, Icon, Input, Button, Modal } from 'antd'
import * as RouterConst from '../../static/const'

import { getCookie } from '../../utils'

import './index.scss'

class Headers extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            selectedTab: "home"
        }
    }

    handleClick(e) {
        this.setState({selectedTab: e.key})
    }

    onChangeUserName(){

    }
    handlerRegister(){
         Modal.info({
            title: '请联系管理员分配账号给您',
            content: (
            <div>
                <p> 联系方式：liuwang@qbao.com</p>
                <p style={{paddingLeft:60}}>huangzhi@qbao.com</p>
            </div>
            ),
            onOk() {},
        });
    }

    render() {
        let { Header } = Layout, SubMenu = Menu.SubMenu, MenuItemGroup = Menu.ItemGroup

        return(
            <Header className="header-div">
                <div className="logo" onClick={()=>hashHistory.push(RouterConst.ROUTER_HOME)}></div>
                <Menu onClick={(e) => this.handleClick(e)} selectedKeys={[this.state.selectedTab]} mode="horizontal" className="menuUl" >
                    <Menu.Item key="home" className="menuLi"><Link to={RouterConst.ROUTER_HOME}>首页</Link></Menu.Item>
                    <Menu.Item key="user" className="menuLi"><Link to={RouterConst.SEARCH_LIST}>用户画像</Link></Menu.Item>
                    <Menu.Item key="pic" className="menuLi"><Link to={RouterConst.GET_MESSAGE}>画像营销</Link></Menu.Item>
                    <Menu.Item key="doc" className="menuLi"><Link to='/dev/list1'>说明文档</Link></Menu.Item>
                    
                </Menu>

                {
                    !this.props.isLogin ? 
                        <div className="login-btns">
                            <Button className="bnLogin" onClick={() => hashHistory.push(RouterConst.ROUTER_LOGIN) }>登录</Button>
                            <Button className="bnRegister" onClick={()=>this.handlerRegister() }>立即注册</Button>
                        </div>
                        : <div className="login-btns">{getCookie("userName")}</div>
                }
            </Header>
        )
    }

}

Headers.PropTypes = {
    isLogin: PropTypes.bool.isRequired,
}

let mapStateToProps = state => ({
    isLogin: state.loginReducer.isLogin,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers)