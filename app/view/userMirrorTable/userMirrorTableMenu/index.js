import React, { PropTypes } from 'react'
import { Menu } from 'antd'

import TableMenuItem from './tableMenuItem'

import './index.scss'

class UserMirrorTableMenu extends React.Component{

    constructor(props, context){
        super(props, context)
    }

    componentDidMount(){
    }

    render(){
        return (
            <div className="user-mirror-table-menu">
                <Menu>
                    {
                        this.props.data.map((obj, key) =>
                            <Menu.Item key={key}>
                                <TableMenuItem data={obj} />
                            </Menu.Item>
                        )
                    }
                </Menu>
            </div>
        )
    }
}

UserMirrorTableMenu.PropTypes = {
    data: PropTypes.array.isRequired,
}

export default UserMirrorTableMenu