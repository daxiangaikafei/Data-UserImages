import React, { PropTypes } from 'react'

import Icon from '../../icon'

import './index.scss'

class SubMenuItem extends React.Component{

    constructor(props, context){
        super(props, context)

        this.state = {
            isMouseOver: false
        }
    }

    onMouseOverHandler(){
        this.setState({isMouseOver: true})
    }

    onMouseOutHandler(){
        this.setState({isMouseOver: false})
    }

    render(){
        let { isMouseOver } = this.state
        let {title, icon, isActve } = this.props
        let color = isMouseOver ? isActve ? '#1a5bfb' : '#ffffff' : '#000000'
        return (
            <div className="submenu-item" onMouseOver={()=>this.onMouseOverHandler()} onMouseOut={()=>this.onMouseOutHandler()}>
                <div className="icon-group">
                    <Icon className="circle-bg" name="circle" size="30" color={color} />
                    <Icon className="item-icon" name={icon} size="16" color={color} />
                </div>
                <span className="submenu-title" style={{color: color}}>{title}</span>
            </div>
        )
    }

}

SubMenuItem.PropTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isActve: PropTypes.bool.isRequired,
}

export default SubMenuItem