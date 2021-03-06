import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, Link ,hashHistory} from 'react-router';
import { Layout, Menu, Icon, Input, Button } from 'antd'
import {getOpenKeys,getCurrent} from '../siderMenu/reducer/action'
import * as RouterConst from '../../static/const'

import './index.scss'

class Headers extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            selectedTab: "home",
            isShow:false
        }
    }

    handleClick(e) {
        this.setState({selectedTab: e.key})

        this.props.getOpenKeys(['sub0'])
        this.props.getCurrent('a0')
    }
    handlerSearch(e){
        this.setState({
            isShow:true
        })
        this.state.value&&hashHistory.push('/userMirror/'+this.state.value)
    }
    handlerKeyUp(e){
        if(e.keyCode==13){
            this.handlerSearch()
        }
    }
    handlerChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render() {
        let { Header } = Layout, SubMenu = Menu.SubMenu, MenuItemGroup = Menu.ItemGroup

        return(
            <Header className="header-div2">
                <div className="wapper">
                    <div className="logo2" onClick={()=>hashHistory.push(RouterConst.ROUTER_HOME)}></div>
                    <div className="right" className={this.state.isShow==true?"right showInput":"right showInput"} >
                         <Input className="search_input"  onChange={this.handlerChange.bind(this)} onKeyUp={this.handlerKeyUp.bind(this)} placeholder="请输入用户ID" />
                         <Icon type="search" className="search_icon" onClick={this.handlerSearch.bind(this)} />
                    </div>
                    <Menu onClick={(e) => this.handleClick(e)} selectedKeys={[this.state.selectedTab]} mode="horizontal" className="menuUl">
                        <Menu.Item key="home" className="menuLi"><Link to='/'>首页</Link></Menu.Item>
                        <Menu.Item key="user" className="menuLi"><Link to='/searchList'>用户画像</Link></Menu.Item>
                        <Menu.Item key="pic" className="menuLi"><Link to='/message'>画像营销</Link></Menu.Item>
                        <Menu.Item key="doc" className="menuLi"><Link to='/dev/list1'>说明文档</Link></Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }

}



Headers.propTypes = {
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getOpenKeys,getCurrent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Headers)