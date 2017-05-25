import React, { PropTypes } from 'react'

import UserMirrorTableItem from './userMirrorTableItem'

import './index.scss'

class UserMirrorTableContainer extends React.Component{
    constructor(props, context){
        super(props, context)
    }

    render(){
        let { username } = this.props
        return (
            <div className="table-container">
                <div className="table-title">搜索用户：{username}</div>
                <div>
                    {this.props.data.map((obj, key) =>
                        obj.children.map((item, index) => 
                            <UserMirrorTableItem key={key + "_" + index} data={item} />
                        )
                    )}
                </div>
            </div>
        )
    }
}

UserMirrorTableContainer.PropTypes = {
    username: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default UserMirrorTableContainer