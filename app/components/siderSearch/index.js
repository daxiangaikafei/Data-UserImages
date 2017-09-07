import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Menu, Button } from 'antd'

import Icon from '../icon'

import SubMenuItem from './subMenuItem'

import { changeShowMenuList, getSearchMenu } from '../../view/search/reducer/actions'

import '../../static/css/common.scss'
import './index.scss'

class SiderSearchMenu extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            openKeys: ["0"]
        }
    }

    componentDidMount() {
        this.props.getSearchMenu()
    }

    getMenu() {
        let SubMenu = Menu.SubMenu
        let { filterMenuList, showMenuList, menuData } = this.props
        return menuData.map((data, index) =>
            <SubMenu className="search-subMenu" key={index} title={<SubMenuItem title={data.name} icon={data.icon} isActve={this.state.openKeys.indexOf(index+"")>=0?true: false} />}>
                {
                    data.list.map((item, i) => {
                        let key = item.id
                        return (
                            <Menu.Item className={item.isShow ? "menu-item-show" : "menu-item-hide"} key={key} disabled={!item.isReport} >
                                <div className="menu-icon"></div>
                                <div className="menu-item-title">{item.name}</div>
                            </Menu.Item>
                        )
                    })
                }
            </SubMenu>
        )
    }

    onSubMenuHandler = (openKeys) => {
        if (openKeys.length > 1) {
            openKeys.shift()
        }
        this.setState({ openKeys: openKeys })
    }

    handleClick = (e) => {
        this.props.changeShowMenuList(e.key)
    }

    render() {
        let { silderFold } = this.props
        let { openKeys } = this.state
        
        return (
            <div className="silder" >
                <div className="silder-title">
                    <span className={silderFold?"menu-close":"menu-open"} >展示图表</span>
                    <span style={{cursor: "pointer"}} onClick={()=>this.props.onChangeSilderFold(!silderFold)}><Icon name="show" size="20" color="#000" /></span>
                </div>
                <Menu
                    //defaultSelectedKeys={SelectedKeys}
                    defaultOpenKeys={openKeys}
                    openKeys={openKeys}
                    onOpenChange={this.onSubMenuHandler}
                    onClick={this.handleClick}
                    mode={silderFold ? "vertical" : "inline"}>
                    {this.getMenu()}
                </Menu>
            </div>
        )
    }
}

SiderSearchMenu.PropTypes = {
    silderFold: PropTypes.bool.isRequired,
    menuData: PropTypes.array.isRequired
}

let mapStateToProps = state => ({
    menuData: state.searchList.menuData
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeShowMenuList, getSearchMenu }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderSearchMenu)