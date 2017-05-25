import React, { PropTypes } from 'react'

import Icon from '../../../../components/icon'

import './index.scss'

class TableMenuItem extends React.Component{

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

    componentDidMount(){
    }

    render(){
        let { isMouseOver } = this.state
        let { icon, name } = this.props.data

        return (
            <div className="table-menu-item" onMouseOver={()=>this.onMouseOverHandler()} onMouseOut={()=>this.onMouseOutHandler()}>
                <div className="icon-group">
                    <Icon className="circle-bg" name="circle" size="30" color={isMouseOver ? '#ffffff' : '#000000'} />
                    <Icon className="item-icon" name={icon} size="16" color={isMouseOver ? '#ffffff' : '#000000'} />
                </div>
                <span className="submenu-title" style={{color: isMouseOver ? '#ffffff' : '#000000'}}>{name}</span>
            </div>
        )
    }
}

TableMenuItem.PropTypes = {
    data: PropTypes.object.isRequired,
}

export default TableMenuItem